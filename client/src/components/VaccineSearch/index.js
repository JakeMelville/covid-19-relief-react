import React from 'react';
import './style.css'

function VaccineSearch(props) {
    return (
       
            <div className="container w-100 m-0 p-">
                <div className="row w-100 m-0">
                    <h2 id='headerBrands' className="col-12 text-center">Vaccine Provider Brands</h2>
                    <form id="inputForm" className="col-12 text-center pb-3" onSubmit={props.handleSubmit}>
                        <select name='state' value={props.vaccineState} onChange={(e) => props.setVaccineState(e.target.value)}>
                            <option value='AL'>AL</option>
                            <option value='AK'>AK</option>
                            <option value='AZ'>AZ</option>
                            <option value='AR'>AR</option>
                            <option value='CA'>CA</option>
                            <option value='CO'>CO</option>
                            <option value='CT'>CT</option>
                            <option value='DE'>DE</option>
                            <option value='DC'>DC</option>
                            <option value='FL'>FL</option>
                            <option value='GA'>GA</option>
                            <option value='HI'>HI</option>
                            <option value='ID'>ID</option>
                            <option value='IL'>IL</option>
                            <option value='IN'>IN</option>
                            <option value='IA'>IA</option>
                            <option value='KS'>KS</option>
                            <option value='KY'>KY</option>
                            <option value='LA'>LA</option>
                            <option value='ME'>ME</option>
                            <option value='MH'>MH</option>
                            <option value='MD'>MD</option>
                            <option value='MA'>MA</option>
                            <option value='MI'>MI</option>
                            <option value='MN'>MN</option>
                            <option value='MS'>MS</option>
                            <option value='MO'>MO</option>
                            <option value='MT'>MT</option>
                            <option value='NE'>NE</option>
                            <option value='NV'>NV</option>
                            <option value='NH'>NH</option>
                            <option value='NJ'>NJ</option>
                            <option value='NM'>NM</option>
                            <option value='NY'>NY</option>
                            <option value='NC'>NC</option>
                            <option value='ND'>ND</option>
                            <option value='OH'>OH</option>
                            <option value='OK'>OK</option>
                            <option value='OR'>OR</option>
                            <option value='PA'>PA</option>
                            <option value='PR'>PR</option>
                            <option value='RI'>RI</option>
                            <option value='SC'>SC</option>
                            <option value='SD'>SD</option>
                            <option value='TN'>TN</option>
                            <option value='TX'>TX</option>
                            <option value='VI'>VI</option>
                            <option value='UT'>UT</option>
                            <option value='VT'>VT</option>
                            <option value='VA'>VA</option>
                            <option value='WA'>WA</option>
                            <option value='WV'>WV</option>
                            <option value='WI'>WI</option>
                            <option value='WY'>WY</option>

                        </select>
                        <button id="submitBtn" className='btn-primary' type='submit'>Submit</button>
                    </form>
                    <div className='col-text-center'>
                        <form onSubmit={props.resetForm}>
                            <button id='resetBtn' type='submit' className='btn btn-primary'>Reset Search</button>
                        </form>
                    </div>
                </div>
            </div>
   
    )
};

export default VaccineSearch;