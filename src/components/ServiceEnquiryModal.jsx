import { useEffect, useRef, useState } from 'react'
import { contactEmail, serviceEnquiryFields } from '../data/siteContent.js'

function formBody(formData, service) {
  const entries = new Map()
  for (const [key, value] of formData.entries()) {
    const values = entries.get(key) ?? []
    values.push(value)
    entries.set(key, values)
  }

  return [
    'Website Enquiry',
    `Service: ${service}`,
    '',
    ...[...entries].map(([key, values]) => `${key}: ${values.join(', ')}`),
  ].join('\n')
}

function Field({ field }) {
  const id = `service-enquiry-${field.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  if (field.type === 'checkboxes') {
    return <fieldset className="service-checkbox-group form-wide"><legend>{field.label}</legend><div className="service-checkboxes">{field.options.map((option) => <label key={option}><input type="checkbox" name={field.label} value={option} />{option}</label>)}</div></fieldset>
  }

  if (field.type === 'textarea') {
    return <label className="form-wide" htmlFor={id}>{field.label}<textarea id={id} name={field.label} rows="3" /></label>
  }

  if (field.type === 'select') {
    return <label htmlFor={id}>{field.label}<select id={id} name={field.label} defaultValue=""><option value="" disabled>Select an option</option>{field.options.map((option) => <option key={option}>{option}</option>)}</select></label>
  }

  return <label htmlFor={id}>{field.label}<input id={id} name={field.label} type={field.type ?? 'text'} /></label>
}

export default function ServiceEnquiryModal({ service, onClose }) {
  const closeButtonRef = useRef(null)
  const [status, setStatus] = useState('')
  const fields = serviceEnquiryFields[service] ?? []

  useEffect(() => {
    closeButtonRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const closeOnEscape = (event) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [onClose])

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    const subject = `Website Enquiry – ${service}`
    // Keep this formatted payload separate so this handoff can later be replaced
    // with EmailJS, FormSubmit, or a backend endpoint without changing the form.
    const body = formBody(new FormData(form), service)
    setStatus('Your email application has opened with your enquiry. Please review and send the prepared email to complete your enquiry.')
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return <div className="service-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <section className="service-modal" role="dialog" aria-modal="true" aria-labelledby="service-enquiry-title">
      <button ref={closeButtonRef} className="service-modal-close" type="button" onClick={onClose} aria-label="Close enquiry form">×</button>
      <p className="service-modal-kicker">SERVICE ENQUIRY</p>
      <h2 id="service-enquiry-title">Enquire about<br /><em>{service}</em></h2>
      <p className="service-modal-intro">Share the key details below and we will prepare an email enquiry addressed to our team.</p>
      <form className="enquiry-form service-enquiry-form" onSubmit={handleSubmit}>
        <div className="service-subject">Selected service <strong>{service}</strong></div>
        <div className="form-grid">
          <label>Full name<input name="Full name" autoComplete="name" required /></label>
          <label>Phone number<input name="Phone number" type="tel" autoComplete="tel" required /></label>
          <label>Email address<input name="Email address" type="email" autoComplete="email" required /></label>
          <label>Company name <span className="optional-label">Optional</span><input name="Company name" autoComplete="organization" /></label>
          <label className="form-wide">{service === 'Construction Joint Ventures' ? 'Land/project location' : 'Project location'}<input name={service === 'Construction Joint Ventures' ? 'Land/project location' : 'Project location'} autoComplete="address-level2" required /></label>
          {fields.map((field) => <Field key={field.label} field={field} />)}
          <label className="form-wide">Additional message<textarea name="Additional message" rows="4" /></label>
        </div>
        <div className="form-submit-row"><button className="button button-gold" type="submit">Prepare enquiry email <span aria-hidden="true">↗</span></button><span>Your email app will open; sending the email completes your enquiry.</span></div>
        <p className="form-status" role="status" aria-live="polite">{status}</p>
      </form>
    </section>
  </div>
}
