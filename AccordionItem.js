import React from 'react'

export default class AccordionItem extends React.Component {

  loadAccordionContent() {
    if(this.props.flow === 'faq'){
      return (
          <div dangerouslySetInnerHTML={{__html: this.props.details}} />
      )
    }
    else{
      return(
        <div>
          {this.props.details}
        </div>
      )
    }
  }

  render () {
    const itemId = this.props.id
    const ariaAttr = {
      input: {
        'role': 'presentation',
        'aria-hidden': true
      },
      label: {
        'role': 'Tab'
      },
      content: {
        'role': 'Tabpanel',
        'aria-describedby': `accordion-title-${itemId}`
      }
    }

    return (
      <li>
        <input
          className='accordionActuator'
          name={this.props.name}
          id={`accordionActuator-${itemId}`}
          type={this.props.type || 'checkbox'}
          defaultChecked={this.props.active}
          {...ariaAttr.input} />

        <label
          className='accordionTitle'
          id={`accordionTitle-${itemId}`}
          htmlFor={`accordionActuator-${itemId}`}
          {...ariaAttr.label} >{this.props.summary}</label>
          <div className='accordionContent' {...ariaAttr.content} >
            {typeof this.props.details === 'string' && <div dangerouslySetInnerHTML={{__html: this.props.details }} />}
            {typeof this.props.details !== 'string' && this.props.details }
            {this.props.showNext && this.props.nextCTA}
          </div>
      </li>
    )
  }
}
