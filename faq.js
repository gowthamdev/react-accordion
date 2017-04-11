import React from 'react'
import { Provider } from 'react-redux'
import Head from 'next/head'
import Page from '../components/Page'
import Layout from '../components/Layout'
import FaqNav from '../components/FaqNav'
import Accordion from '../components/Accordion'
import stylesheet from 'styles/base.scss'

let items = [
  {
    summary: 'How does Auto Renew work?',
    details: 'We’re a subscription service, so when you sign up for a box, you are also signing up for a subscription plan.  As long as Auto Renew is on, you will be automatically billed each time your subscription is up for renewal (which you can see by looking at the Next Billing Date on your subscription).  In order to stop Auto Renewal, simply turn it off before the Next Billing Date.  You can also turn it back on later when you’re ready for more boxes!',
    active: false,
    key: 0
  },
  {
    summary: 'What is the difference between subscription plans?',
    details: 'We’re a bi-monthly subscription service, so we ship boxes every other month.  Each plan varies on how many boxes you are committing to and paying for up front.  With the Pay as You Go plan, you only buy one box at a time and are charged every other month. With the 6 Month plan, you buy the next 3 boxes up front and renew semi-annually. With the 12 Month subscription you buy the next 6 boxes up front and renew annually. The subscription boxes are the same no matter which plan you sign up for, but the longer the plan you sign up for, the more perks you get!  For instance, 12 Month subscribers get a free welcome gift in their first box, a free collectible anniversary gift, and bonus Funko Crowns that can be used towards our rewards program.',
    active: false,
    key: 1
  },
  {
    summary: 'How do I update my account or subscription information?',
    details: 'Your account has different sections to help you easily access information.  Billing and address information can be updated in your Payment Options section.  Subscription-specific information — like shipping address, shirt size, or Auto Renew status – can be edited in your Subscriptions section.  Please note that updating a subscription will not affect any orders that already exist in your Order History section, so make sure to make subscription changes before your Next Billing Date (or before your next automatically-generated pre-paid order if you have a 6 Month or 12 Month subscription).',
    active: false,
    key: 2
  },
  {
    summary: 'How do I skip a box?',
    details: '<p>If you subscribe to our flexible Pay As You Go plan, you can skip box themes you don’t want*, but still keep your subscription going. After the box theme is announced, you have until your billing date to skip that month’s box and not have your account charged. Simply go to your Account Page, and under Your Subscriptions click the button ‘Skip This Box’.</p>' +
             '<ul>' +
                '<li>Note that you cannot skip the first box from your subscription, as it is purchased upon sign-up.</li>' +
              '</ul>',
    active: false,
    key: 3
  },
  {
    summary: 'What is a Disney Pioneer and what makes them special?',
    details: '“Pioneer” is an elite status that is given only to Disney 12-Month plan subscribers who purchase the very first box from the Disney Treasures subscription program. They receive an exclusive Pioneers-only anniversary gift at the end of 12 months that is different than the standard anniversary gift given to other subscribers. And as long as Pioneers keep their subscription active, they will receive a Pioneers-only anniversary gift year after year. Last, Pioneers receive a digital Disney Treasures Founders badge to show off their status on social media and be eligible for Pioneers-only rewards and contests.',
    active: false,
    key: 4
  }
]
let data = [
  {
    summary: 'What is your cancellation policy?',
    details: 'You can see our cancellation policy<a href="/cancellation-policy">here</a>.',
    active: false,
    key: 5
  },
  {
    summary: 'What is your replacement policy?',
    details: 'You can see our replacement policy<a href="/replacement-policy">here</a>.',
    active: false,
    key: 6
  },
  {
    summary: 'When is my credit card charged?',
    details: 'Initial subscription payment is taken in full at the time of checkout. Renewal payments are charged bi-monthly, semi-annually or yearly, based on the type of subscription purchased.  Renewing orders will be charged based on the next billing date that appears in your subscription.',
    active: false,
    key: 7
  },
  {
    summary: 'When will my order ship and how can I track it?',
    details: 'Subscription boxes ship every other month shortly after the box cutoff date.  Members Only Products orders ship within two weeks of order, unless otherwise specified.  We’ll send you an email with tracking when your order ships, and you can also see tracking information once it’s available within the order in your account.',
    active: false,
    key: 8
  },
  {
    summary: 'Do you ship internationally?',
    details: 'We are only able to ship to the US and Canada, or to APO/FPO addresses.',
    active: false,
    key: 9
  },
  {
    summary: 'What do I do if I received tracking information but my box was not delivered?',
    details: '<p><strong>Shipping or Delivery Issues</strong></p>\n' +
    '<p>Funko shall use good faith efforts to deliver the Boxes to the designated location specified by you at the time of purchase. Title to the boxes passes from Funko to you upon shipment from Funko’s facility. Funko makes every effort to make sure that you know when your box is on its way to you, so that you can take delivery of it in good order.  See below for information on how or if we are able to address various delivery issues.</p>\n' +
    '<p><strong>Box Lost in Shipment (before reaching carrier)</strong></p>\n' +
    '<p>Tracking can take up to a week to update after being sent to you.  If, after a week, your tracking still shows no movement, email support.  Based on stock availability, we will either issue you a replacement box or a full refund for your order.</p>\n' +
    '<p> <strong>Box Lost in Shipment (after reaching carrier)</strong></p>\n' +
    '<p>If your box is lost in shipment, we can help you open a claim with the shipping carrier.  If the carrier is able to provide a refund, we will either issue you a replacement box or a refund for your order based on stock availability.  Please note that, based on your country, international tracking is limited and can take a number of weeks to update.  We are not able to start a shipping claim unless at least three weeks have passed since the last tracking update.</p>\n' +
    '<p> <strong>Undeliverable or Returned to Sender</strong></p>\n' +
    '<p>If your box was shipped to the address in your order but was unable to be delivered or returned to sender, we will either issue you a replacement box or a refund for your order based on stock availability.  Note that you may be responsible for both return shipping charges, as well as replacement shipping charges.  If Funko shipped the package to an address not in your order, we will either issue you a replacement box or a full refund (including shipping charges) based on stock availability.</p>\n' +
    '<p> <strong>Delivered</strong></p>\n' +
    '<p>If your tracking shows that your box was delivered but you do not have possession, we can help you open a claim with the shipping carrier.  If the carrier is able to provide a refund, we will either issue you a replacement box or a refund for your order based on stock availability.  If the carrier is unable to assist, there is nothing more that we can do.  Note that, if you believe your box was taken by other individuals after delivery, this is also an outside issue that we are not able to assist you with.</p>\n' +
    '<ul>' +
    '<li> <strong>Shipping & Handling Fees</strong></li>\n' +
    '<p>Your initial order included shipping & handling fees for initial shipment. Funko cannot be responsible for additional fees incurred upon shipment, including:</p>\n' +
    '<li><strong>Customs or duties fees or charges for international shipments</strong></li>\n' +
    '<p>Forwarding or postage on delivery costs for packages shipped to the address in the order and subsequently forwarded to a new or updated address</p>\n' +
    '</ul>',
    active: false,
    key: 10
  }
]
let content = [
  {
    summary: 'What will each box contain?',
    details: 'As a mystery style subscription, each box will have different contents.  Each box is guaranteed to have at least one Pop! Vinyl figure inside it.  Everything inside each box is exclusive to the subscription service, and contents can include apparel, accessories, toys, memorabilia, and more!',
    active: false,
    key: 11
  },
  {
    summary: 'Can I order a past box or other exclusive products?',
    details: 'Starting on April 15, 2017, as an active member, you will have access to past boxes (while supplies last) and other exclusive products!  When inventory is available, you’ll see a Member Exclusive Collectible section in your account.  From there you can order any available past boxes or exclusive products.',
    active: false,
    key: 12
  },
  {
    summary: 'What do I do if a box is missing an item or if an item is damaged?',
    details: 'In the rare case an item comes damaged or is missing, please email our customer service team within 15 days of receipt.  If you are reporting a damaged or incorrect item, make sure to include a photo of the damage.  Damage to product packaging or shipping boxes does not qualify for a replacement.  You can see our full replacement policy here.',
    active: false,
    key: 13
  }
]
export default class extends Page {
  render () {
    return (
      <Provider store={this.store}>
        <Layout>
          <Head>
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          </Head>
          <div id='faq-faq'>
            <div id='body-content'>
              <div className='container'>
                <div className='row'>
                  <FaqNav />
                  <div className='column small-12 medium-8' id='questions'>
                    <h1>FAQ</h1>
                    <h4>How It Works: Accounts and Subscriptions</h4>
                    <ul className='no-bullet'>
                      <Accordion name='faq1' type='radio' data={items} flow='faq'/>
                    </ul>
                    <h4>How It Works: Billing and Shipping</h4>
                    <ul className='no-bullet'>
                      <Accordion name='faq1' type='radio' data={data} flow='faq' />
                    </ul>
                    <h4>What You Get</h4>
                    <ul className='no-bullet'>
                      <Accordion name='faq1' type='radio' data={content} flow='faq' />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </Provider>
    )
  }
}
