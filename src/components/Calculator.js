import React, { useState } from 'react'

const Calculator = () => {

  const [inputData, setInputData] = useState({income: 0, days: 0, hasTubercolosis: false});

  const [calcData, setCalcData] = useState(
    {
      employerCompensationAmount:0, 
      insuranceCompensationAmount:0, 
      employerCompensationDays:0, 
      insuranceCompensationDays:0, 
      employerDailyAllowance:0, 
      insuranceDailyAllowance:0, 
      total:0
    })

  const handleChange = (e) => {
    const {name, value, checked, type} = e.target;

    setInputData(oldData => (
      {...oldData, [name]:type === "checkbox" ? checked : value}
    ))
  }
  const calcEmployerCompensationDays = () => {
    const maxEmployerCompensationDays = 5;
    //starts paying from 3rd day onwards
    if(inputData.days <= 3) return 0;
    if(inputData.days <= 3 + maxEmployerCompensationDays){
      return inputData.days - 3;
    }
    return maxEmployerCompensationDays;
  }

  const calcInsuranceCompensationDays = () => {
    const maxDays = inputData.hasTubercolosis ? 240 : 182;
    if(inputData.days <= 8) return 0;
    if(inputData.days <= 8 + maxDays){
      return inputData.days - 8
    }
    return maxDays;
  }

  const calcDailyAllowance = () => {
    const dailyWorkHours = 7;
    const monthlyWorkDays = 20;
    const monthlyWorkHours = monthlyWorkDays*dailyWorkHours;
    const compensationRate = 0.7;
    const dailyCompensatedIncome = inputData.income/monthlyWorkHours*dailyWorkHours*compensationRate;
    return dailyCompensatedIncome;
  }

  const calcEmployerCompensationAmount = () => {
    const employerCompensationDays = calcEmployerCompensationDays();
    const dailyCompensatedIncome = calcDailyAllowance();
    return dailyCompensatedIncome*employerCompensationDays;
  }
  const calcInsuranceCompensationAmount = () => {
    const insuranceCompensationDays = calcInsuranceCompensationDays();
    const dailyCompensatedIncome = calcDailyAllowance();
    return dailyCompensatedIncome*insuranceCompensationDays;
  }
  const calcTotal = () => {
    return calcInsuranceCompensationAmount() + calcEmployerCompensationAmount();
  }

  const handleCalculation = () => {
    setCalcData(
      {
        employerCompensationDays: calcEmployerCompensationDays(),
        employerCompensationAmount: calcEmployerCompensationAmount().toFixed(2),
        employerDailyAllowance: calcDailyAllowance().toFixed(2),
        insuranceCompensationDays: calcInsuranceCompensationDays(),
        insuranceDailyAllowance: calcDailyAllowance().toFixed(2),
        insuranceCompensationAmount: calcInsuranceCompensationAmount().toFixed(2),
        total: calcTotal().toFixed(2)
      }
    )
  }

  return (
    <div className='calculatorWrapper'>
            <div className="upperBorder"></div>
            <div className="calculatorContent">
              <div className='calculator'>
                <h1 className='calcTitle'>Compensation <br /> Calculator</h1>
                <div className='inputFieldWrapper'>
                  <label htmlFor="income">Average income</label>
                  <div className='inputFieldContainer'>
                    <input className='inputField' type='number' id='income' name='income' value={inputData.income} onChange={handleChange} />
                    <span className='inputType'>€</span>
                  </div>
                </div>
                <div className='inputFieldWrapper'>
                  <label htmlFor="days">Days on sick-leave</label>
                  <div className='inputFieldContainer'>
                    <input className='inputField' type='number' id='days' name='days'  value={inputData.days} onChange={handleChange}/>
                    <span className='inputType'>days</span>
                  </div>
                </div>
                <div className='inputFieldWrapper'>
                  <label className='checkboxWrapper'>
                    <input className='checkbox' type='checkbox' id='tubercolosis' name='hasTubercolosis'  value={inputData.hasTubercolosis} onChange={handleChange}/>
                    <span className='fakebox'>
                      <span className='fakeboxBackground'>
                      </span>  
                    </span>
                    <span>I have tubercolosis</span>
                  </label>
                </div>
                <button className='inputButton'>
                    <span className='buttonText' onClick={handleCalculation}>Calculate</span>
                </button>
              </div>
              <div className='calcData'>
                  <hr />
                    <div className='dataContainer'>
                      <div className='item1'>
                        <p className='infoText'>The employer compensates <br /> <strong>{calcData.employerCompensationDays} days</strong></p>
                      </div>
                      <div className='item2'>
                       <p className='infoText'>Health Insurance compensates <br /> <strong> {calcData.insuranceCompensationDays} days</strong></p>
                      </div>
                      <div className='item3'>
                        <p className='infoTextBig'>{calcData.employerCompensationAmount}€</p>
                        <p className='infoTextGray'>Daily allowance <br /> {calcData.employerDailyAllowance}€</p>   
                      </div>
                      <div className='item4'>
                        <p className='infoTextBig'>{calcData.insuranceCompensationAmount}€</p>
                        <p className='infoTextGray'>Daily allowance <br /> {calcData.employerDailyAllowance}€</p>   
                      </div>
                    </div>
                  <hr />
                  <div className='totalTextWrapper'>
                    <p className='infoText totalText'>Compensation total for {inputData.days} days (net)</p>
                    <br />
                    <p className='totalTextBig'>{calcData.total}€</p>
                  </div>
              </div>
            </div>
            <div className="bottomBorder"></div>
    </div>
  )
}

export default Calculator