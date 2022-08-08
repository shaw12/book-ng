import React from 'react'
import './style.scss'

const Reservation: React.FC = () => {
  return (
    <div className="reservation--main">
      <header className="sidebar"></header>
      <div className="reservation">

        <div className="reservation__header">
          <h2>Bokningar</h2>
          <button className='beta-btn'>BETA</button>
        </div>

        <caption className='d-flex-alc'>
          <img src="/images/reservation/chevron-left.svg" alt="" />
          Tillbaka till bokningsöversikt
        </caption>

        <div className='reservation__body'>

          <div className='p-24'>
            <div className="reservation__body_header d-flex-alc mb-24">
              <h4>Bokning 420691337</h4>
              <div className="reservation__events d-flex-alc">
                <button className="res-btn d-flex-alc">
                  <img src="/images/reservation/edit.svg" alt="" />
                  Redigera
                </button>
                <button className="res-btn d-flex-alc">
                  <img src="/images/reservation/download.svg" alt="" />
                  ladda ner specifikation
                </button>
                <button className="res-btn d-flex-alc cancel">
                  <img src="/images/reservation/x.svg" alt="" />
                  avboka
                </button>
              </div>
            </div>

            <div className='reservation__body_content d-flex-alc br-btm'>
              
              <div className='reservation__card p-24 card-1'>
                <div className="reservation__card_row d-flex-alc mb-24">
                  <img src="/images/reservation/user.svg" alt="" />
                  <h4>Niklas Larsson</h4>
                </div>
                <div className="reservation__card_row d-flex-alc mb-24">
                  <img src="/images/reservation/map-pin.svg" alt="" />
                  <h4>Testvägen 10 12150 Stockholm</h4>
                </div>
              </div>

              <div className='reservation__card p-24 card-2'>
                <div className="reservation__card_row d-flex-alc mb-16">
                  <img src="/images/reservation/phone.svg" alt="" />
                  <h4>+46000000000</h4>
                </div>
                <div className="reservation__card_row d-flex-alc mb-16">
                  <img src="/images/reservation/mail.svg" alt="" />
                  <h4>Niklas.larsson@campcation.se</h4>
                </div>
                <div className="reservation__card_row d-flex-alc mb-16">
                  <img src="/images/reservation/share-2.svg" alt="" />
                  <h4>Manuell</h4>
                </div>
              </div>

              <div className='reservation__card reservation__card_full-wd timeline d-flex-alc'>
                <div className="reservation__card_row d-flex-alc">
                  <div className='calendar-row d-flex-alc'>
                    <img src="/images/reservation/calendar.svg" alt="" />
                    <h3>23-09-2022</h3>
                  </div>
                  <img src="/images/reservation/chevron-right.svg" alt="" />
                  <div className='calendar-row d-flex-alc'>
                    <img src="/images/reservation/calendar.svg" alt="" />
                    <h3>24-09-2022</h3>
                  </div>
                </div>

                <div className="reservation__card_row d-flex-alc">
                  <img src="/images/reservation/Vector.svg" alt="" />
                  <h3>1</h3>
                </div>
              </div>

              <div className='reservation__card reservation__card_full-wd check-list d-flex-alc'>
                <div className="reservation__card_row d-flex-alc">
                  <input type="checkbox" name="check" id="" />
                  <h4>Markerad som läst</h4>
                </div>
                <div className="reservation__card_row d-flex-alc">
                  <input type="checkbox" name="check" id="" />
                  <h4>Betald</h4>
                </div>
                <div className="reservation__card_row d-flex-alc">
                  <input type="checkbox" name="check" id="" />
                  <h4>Checked-in</h4>
                </div>
                <div className="reservation__card_row d-flex-alc">
                  <input type="checkbox" name="check" id="" />
                  <h4>Checked-ut</h4>
                </div>
              </div>

            </div>
          </div>

          <table className="reservation__table">
            <tr>
              <th>Artikel</th>
              <th>Boendeplats</th>
              <th>Gäster</th>
              <th></th>
              <th>Pris</th>
            </tr>
            <tr>
              <td>Stuga</td>
              <td>Stuga 1, Stugby 1</td>
              <td>1</td>
              <td></td>
              <td>360kr</td>
            </tr>
            <tr>
              <td>Stuga</td>
              <td>Stuga 1, Stugby 1</td>
              <td>1</td>
              <td></td>
              <td>360kr</td>
            </tr>
          </table>

          <div className='row_total d-flex-alc br-btm'>
            <h4>Totalt (sek)</h4>
            <h4 className='price'>1337.00kr</h4>
          </div>

          <table className="reservation__table">
            <tr>
              <th>Skattehandlingar</th>
              <th></th>
              <th></th>
              <th>Datum & tid</th>
              <th>Belopp</th>
            </tr>
            <p>Inga handlingar hittades</p>

          </table>

          <button className="res-btn d-flex-alc create-receipt">
            <img src="/images/reservation/plus.svg" alt="" />
            Skapa kvitto
          </button>
        
        </div>

      </div>
    </div>
  )
}

export default Reservation