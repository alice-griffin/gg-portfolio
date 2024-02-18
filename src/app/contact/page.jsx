'use client'
import {useState, useRef} from "react";
import emailjs from "@emailjs/browser"

export default function Page() {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_kqj6kxr', 'template_37bgmx9', form.current, 
    {
      publicKey: 'qL45OmddcmeEi-oPh',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        setLoading(false);
      },
      (error) => {
        console.log('FAILED...', error.text);
        setLoading(false);
      },
    );
    
  }

    return (
      <div>
        <div>
          <p>
            Inquire about having a comissioned painting done below. I will respond as soon as possible to the email provided.
          </p>
        </div>
        <form ref={form} onSubmit={handleSubmit}>
          <div>
              <input required type="text" autoComplete="off" name="user_name" placeholder="Name" />
          </div>
          <div>
            <input required type="email" autoComplete="off" name="user_email" placeholder="Email"/>
          </div>
          <div>
            <textarea rows={4}
            required
            className="w-full"
            name="message"
            placeholder="Comission details"
            />
          </div>
          <button
            type="submit"
            disabled={loading}>
            Send Message
          </button>
        </form>
      </div>
    )
  }