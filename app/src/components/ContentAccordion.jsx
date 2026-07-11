import { useState } from 'react'

const ContentAccordion = ({ children, title }) => {
     const [isOpen, setIsOpen] = useState(false)

     return (
          <article className="message mb-4">
               <div
                    className="message-header has-background-grey-dark"
                    onClick={() => setIsOpen(!isOpen)}
               >
                    <p className="is-size-6 has-text-weight-semibold">
                         {title}
                    </p>
                    <span>{isOpen ? '−' : '+'}</span>
               </div>
               {isOpen && (
                    <div className="message-body has-background-grey-light">
                         <div className="content">{children}</div>
                    </div>
               )}
          </article>
     )
}

export default ContentAccordion
