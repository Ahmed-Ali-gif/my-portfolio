import React from "react";
import { IoIosSend } from "react-icons/io";
import Fields from "../ui/Fields";
import Button from "../ui/Button";
const AboutForm = () => {
  return (
    <form>
      <div>
        <div className="px-2 py-1 bg-amber-700 inline-block rounded-sm">
          <IoIosSend />
        </div>
        <div>
          <h1>Send a Message</h1>
          <p>I'll get back to you as soon as possible</p>
        </div>
      </div>

      <div className="flex gap-4">
        <Fields
          name="Your Name"
          property="text"
          placeholder="Enter your name"
          className="border rounded-sm px-5 py-0.5"
        />
        <Fields
          name="Your Email"
          property="email"
          placeholder="Enter your email"
          className="border rounded-sm px-5 py-0.5"
        />
      </div>
      <Fields
        name="Subject"
        placeholder="What's this about?"
        className="border px-5 py-0.5 w-[28rem]"
      />
      <div className="flex">
        <label htmlFor="" className="mr-1">
          Your Message :
        </label>
        <textarea
          className="border px-2 py-2"
          name=""
          id=""
          cols="50"
          rows="8"
        ></textarea>
      </div>
      <Button className="border text-xl flex items-center justify-center px-2 py-1 w-full" title="Send Message" icon={<IoIosSend />} />
    </form>
  );
};

export default AboutForm;
