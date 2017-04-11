import React from 'react'
import AccordionItem from './AccordionItem'

export default class Accordion extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: -1
    }
  }

  toggle (id) {
    this.setState({active: id})
  }

  prepareAllAccordions () {
    let items = this.props.data

    let allAccordions = items.map((item, index) => {
      let nextItem = items[Math.min(index + 1, items.length - 1)]
      let nextCTA = (<label htmlFor={`accordionActuator-${nextItem.key}`}>
        <a className='button'>{this.props.nextLabel || 'continue'}</a>
      </label>)
      let hasValidNext = index < items.length - 1 ? nextCTA : false

      return (
        <AccordionItem summary={item.summary}
          name={this.props.name}
          type={this.props.type || 'checkbox'}
          details={item.details}
          active={item.active}
          showNext={item.showNext}
          nextCTA={hasValidNext}
          key={item.key}
          id={item.key}/>
      )
    })
    return allAccordions
  }

  render () {
    let ariaAttr = {
      ul: {
        'role': 'Tablist'
      }
    }

    return (
      <ul className='simpleAccordion' {...ariaAttr.ul}>
        {this.prepareAllAccordions()}
      </ul>
    )
  }
}
