import { getOriginalNode } from "typescript";
import { Internship } from "./Internship";
import { Student } from "./Student";
export class CustomizedMap {
    private googleMap: google.maps.Map;
    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        });
    }
    addPin(pinnable: Student | Internship) {
        const infoContent = pinnable instanceof Internship ?
            `Welcome to : ${pinnable.businessName}'s Internship` :
            `${pinnable.firstName} ${pinnable.firstName}`
        const infoWindow = new google.maps.InfoWindow({
            content: infoContent
        })

        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: pinnable.location.latitude,
                lng: pinnable.location.longitude,
            },
        })
        marker.addListener('click', () => {
            console.log(this)
            infoWindow.open(this.googleMap, marker)
        })
    }

}


//     addStudentMarker(student: Student) {
    //       new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //           lat: student.location.latitude,
    //           lng: student.location.longitude,
    //         },
    //       });
    //     }
    //     addInternshipMarker(internship: Internship) {
    //       new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //           lat: internship.location.latitude,
    //           lng: internship.location.longitude,
    //         },
    //       });
    //     }
    // }