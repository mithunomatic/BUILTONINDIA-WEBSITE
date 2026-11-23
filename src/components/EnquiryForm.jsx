import { useState } from 'react'
import { contactEmail } from '../data/siteContent.js'

const enquiryTypes = ['Commercial project', 'Construction', 'Interior fit-out', 'Project management', 'Consultancy', 'Partnership opportunity', 'Other']

export default function EnquiryForm({ variant = 'contact' }) {
  const partnership = variant === 'partnership'
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const values = [...formData.entries()].map(([key, value]) => `${key}: ${value}`).join('\n')
    const subject = partnership ? 'BUILTONINDIA partnership enquiry' : 'BUILTONINDIA project enquiry'
    setMessage('Your email application will open with this enquiry. Send the prepared email to complete your message.')
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(values)}`
  }

  return <form className={`enquiry-form${partnership ? ' partnership-form' : ''}`} onSubmit={handleSubmit}>
    <div className="form-grid">
      <label>Your name<input name="Name" autoComplete="name" required /></label>
      <label>Email address<input name="Email" type="email" autoComplete="email" required /></label>
      <label>{partnership ? 'Organisation / landholding' : 'Company'}<input name="Organisation" autoComplete="organization" /></label>
      <label>{partnership ? 'Opportunity' : 'Enquiry type'}<select name="Enquiry type" defaultValue="" required><option value="" disabled>Select an option</option>{(partnership ? ['Landowner joint venture', 'Construction partnership', 'Development opportunity', 'Residential development', 'Commercial development', 'Strategic partnership', 'Other'] : enquiryTypes).map((type) => <option key={type}>{type}</option>)}</select></label>
      {partnership && <label className="form-wide">Opportunity location<input name="Location" autoComplete="address-level2" /></label>}
      <label className="form-wide">{partnership ? 'Tell us about the opportunity' : 'A little about your project'}<textarea name="Message" rows="4" required /></label>
    </div>
    <div className="form-submit-row"><button className="button button-gold" type="submit">{partnership ? 'Discuss an Opportunity' : 'Send an Enquiry'} <span aria-hidden="true">↗</span></button><span>We will use these details to respond to your enquiry.</span></div>
    <p className="form-status" role="status" aria-live="polite">{message}</p>
  </form>
}
