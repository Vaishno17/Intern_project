import React from 'react'

const Contact = () => {
  return (
    <div className='contacthome relative top-20'>
    <form class="contact-form">
      <h2>Contact Us</h2>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" /><br />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" /><br />

      <label for="message">Message:</label>
      <textarea id="message" name="message" row="5" col="10" /><br />
      <button class="button">Submit</button>
    </form>
    </div>
  )
}

export default Contact