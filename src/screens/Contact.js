import React, {useEffect, useState} from 'react';
import {object, string} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {apps} from "../data";
import ContactFormLabel from "../components/contact/ContactFormLabel";
import ContactFormMessage from "../components/contact/ContactFormMessage";
import {useMutation} from "@tanstack/react-query";


const schema = object({
  name: string().min(1, "Please enter a valid Name"),
  email: string().email("Please enter a valid email address"),
  app: string().min(1, "Please select an app you're contacting about"),
  message: string().min(1, "Please enter a valid message"),
});

function Contact() {

  const [app, setApp] = useState(null);
  const [captchaError, setCaptchaError] = useState(null);

  useEffect(() => {
    setApp(apps);
  }, []);


  const {register, handleSubmit, setValue, formState: {errors}, reset} = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
    resetOptions: {
      keepErrors: false,
      keepDirty: false,
    },
  });
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState(false);


  const displayFirstError = () => {
    for (const key in errors) {
      if (errors[key]) {
        return <ContactFormMessage message={errors[key].message}/>;
      }
    }
    return null;
  };


  // Yeni: Supabase yerine verilen API'ye POST atacak fonksiyon
  const sendContact = async (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      appName: data.app,
      message: data.message,
    };

    try {
      const res = await fetch('https://3sl5yzz2mh.execute-api.eu-central-1.amazonaws.com/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const contentType = res.headers.get('content-type') || '';
      const json = contentType.includes('application/json') ? await res.json() : null;

      if (!res.ok) {
        const msg = (json && json.message) ? json.message : `API responded with status ${res.status}`;
        return Promise.reject(new Error(msg));
      }

      return json;
    } catch (err) {
      return Promise.reject(err);
    }
  }


  const {mutate} = useMutation({
    mutationFn: sendContact,
    onError: () => {
      setSuccess('An error occurred while sending your message please try again later');
      setFormError(true);
    },
    onSuccess: () => {
      setSuccess('Your message has been sent successfully we will get back to you soon');
      setFormError(false);
      reset();
    }
  })

  const onSubmit = data => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"w-2/6 min-w-96 max-w-96"}>
      <div className="mb-5">
        {displayFirstError()}
        {captchaError && <ContactFormMessage message={captchaError}/>}
        {success && <ContactFormMessage message={success} isError={formError}/>}
      </div>
      <h1 className={"text-white font-bold text-4xl mb-10"}>Contact Us</h1>
      <div className="mb-5">
        <ContactFormLabel title={"Name"} name={"name"}/>
        <input type="name" id="name" {...register('name')}
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      <div className="mb-5">
        <ContactFormLabel title={"Email"} name={"email"}/>
        <input type="email" id="email" {...register('email')}
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      <div className="mb-5">
        <ContactFormLabel title={"App"} name={"app"}/>
        <select id="app"
                defaultValue={""}
                onChange={e => setValue('app', e.target.value)}
                {...register('app')}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="">Select an App</option>
          {app?.map((a) => (
            <option key={a.appName} value={a.appName}>{a.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-5">
        <ContactFormLabel title={"Message"} name={"message"}/>
        <textarea id="message" {...register('message')}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
      </div>
      <button type="submit"
              className="w-full text-white transition ease-in-out hover:scale-110 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Send
      </button>
    </form>
  );
}

export default Contact;
