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
            Interested in having a piece commissioned? Inquire below.
          </p>
        </div>
        <form ref={form} onSubmit={handleSubmit} class='my-5 sm: w-full lg:w-1/2'>
          <div class="my-2">
              <input required type="text" autoComplete="off" name="user_name" placeholder="Name" />
          </div>
          <div class="my-2">
            <input required type="email" autoComplete="off" name="user_email" placeholder="Email"/>
          </div>
          <div class="my-2">
            <textarea rows={4}
            required
            className="w-2/3"
            name="message"
            placeholder="Comission details"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            class="my-2"
            >
            Send
          </button>
        </form>
      </div>
    )
  }