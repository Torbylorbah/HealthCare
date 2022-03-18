//  DASHBOARD 
let sAppointments = document.querySelectorAll('.scheduledApmnt');
let patientsWaiting = document.querySelectorAll('.waiting-room');
let totalPatients = document.querySelectorAll('.total-patients')
let activity = document.querySelector('.activity-div')
let id = id =>  document.getElementById(id);
let patient_appoin = id('patient_appoin');

const getData = async () => {
    await fetch('https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients')
    .then(res => res.json())
    .then(data => {
        for (patient of sAppointments){
            patient.innerHTML = data?.scheduledAppointments
        }
        for (patient of totalPatients){
            patient.innerHTML = data?.totalPatients
        }
        for(patient of patientsWaiting){
            patient.innerHTML = data?.waitinfRoom
        }
        
    
        
        for(patient of data?.appointments){
            let date = new Date(patient.createdAt);
            let hour, mainHour, minute, amPm;
            if(date.getHours() > 11){
                hour = date.getHours() - 12;
                amPm = 'pm'
                if(hour <= 9){
                    mainHour = '0' + hour;
                } else {
                    mainHour = hour;
                }
            } else {
                hour = date.getHours();
                amPm = 'am'
                if(hour <= 9){
                    mainHour = '0' + hour;
                } else {
                    mainHour = hour;
                }
            }
            if(date.getMinutes() <= 9){
                minute = '0' + date.getMinutes()
            } else {
                minute = date.getMinutes()
            }


            patient_appoin.innerHTML += `
                <div class="patient-appointment">
                        <div class="apptmnt-details">
                            <p class="font4">${mainHour}:${minute}${amPm}</p>
                        </div>
                    <div class="patient-info">
                        <div>
                            <img src= "${'../images/patient-image1.png'}">
                        </div>                               
                        <div>
                            <p class="font3">${patient.name}</p>
                        </div>
                        <div>
                            <img src="/images/continuation.png">
                        </div>
                    </div>
                </div>
            `
        }
    })

    await fetch('https://612b668c22bb490017893b1d.mockapi.io/health/v1/activites')
    .then(res => res.json())
    .then(data => {
        for(patients of data.activities){
            if(patients.type === 'report'){
                activity.innerHTML += `
                <div class= "flex">
                    <div>
                        <img src="../images/Vectorreport.svg">
                    </div>
                    <div>
                        <p>${patients.title}</p>
                    </div>
                </div>
                `
            }else if(patients.type === 'interview'){
                activity.innerHTML += `
                
                <div class= "flex">
                    <div>
                        <img src="../images/uil_calender.svg">
                    </div>
                    <div>
                        <p>${patients.title}</p>
                    </div>
                </div>
                `
            }
        }
    })
}
getData()