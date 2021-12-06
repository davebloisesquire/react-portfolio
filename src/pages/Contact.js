import React from 'react';

export default function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <div>
        <p>If you give me your name and email I'd be happy to get back to you.</p>
        <input type="email" placeholder="email..."/><br/>
        <input type="text" placeholder="name..."/><br/>
        <button>Submit</button>
        <p>Or you can reach out to me via email. davebloisesquire@gmail.com</p>
      </div>
    </div>
  );
}
