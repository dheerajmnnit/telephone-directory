import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { SearchPipe } from './search.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'telephoneDirectory';
  contacts = [];
  p1;
  p2;
  p3;
  p4;
  p5;
  p6;
  p7;
  p8;
  p9;
  p10;
  p11;
  p12;
  p13;
  p14;
  p15;
  p16;
  p17;
  p18;
  p19;
  p20;
  name = 'name';
  pipes: [SearchPipe];
  personData = {};
  mobileLocalStorage = true;
  updateMobile;
  user;
  userName;

  ngOnInit() {
    this.p1 = new Person();
    this.p1.setName('Dheeraj');
    this.p1.setMobile(8009952909);
    this.p1.setAge(29);
    this.p1.setAddress('Bangalore');

    this.p2 = new Person();
    this.p2.setName('Surabhi');
    this.p2.setMobile(9876543210);
    this.p2.setAge(29);
    this.p2.setAddress('Kanpur');

    this.p3 = new Person();
    this.p3.setName('Arpit');
    this.p3.setMobile(7654321098);
    this.p3.setAge(20);
    this.p3.setAddress('Noida');

    this.p4 = new Person();
    this.p4.setName('Ashish');
    this.p4.setMobile(8765432109);
    this.p4.setAge(16);
    this.p4.setAddress('Delhi');

    this.p5 = new Person();
    this.p5.setName('Shubham');
    this.p5.setMobile(9876543210);
    this.p5.setAge(29);
    this.p5.setAddress('Allahabad');

    this.p6 = new Person();
    this.p6.setName('Shivani');
    this.p6.setMobile(8012345698);
    this.p6.setAge(24);
    this.p6.setAddress('Varanasi');

    this.p7 = new Person();
    this.p7.setName('Shivam');
    this.p7.setMobile(789812345);
    this.p7.setAge(22);
    this.p7.setAddress('Chandausi');

    this.p8 = new Person();
    this.p8.setName('Rachana');
    this.p8.setMobile(9012357949);
    this.p8.setAge(30);
    this.p8.setAddress('Uttar Pradesh');

    this.p9 = new Person();
    this.p9.setName('Aditi');
    this.p9.setMobile(7651234567);
    this.p9.setAge(25);
    this.p9.setAddress('Gujrat');

    this.p10 = new Person();
    this.p10.setName('Bhavesh');
    this.p10.setMobile(8712345687);
    this.p10.setAge(27);
    this.p10.setAddress('Amethi');

    this.p11 = new Person();
    this.p11.setName('Abhi');
    this.p11.setMobile(7812345678);
    this.p11.setAge(9);
    this.p11.setAddress('Nagpur');

    this.p12 = new Person();
    this.p12.setName('Abhinay');
    this.p12.setMobile(91254678123);
    this.p12.setAge(25);
    this.p12.setAddress('Indore');

    this.p13 = new Person();
    this.p13.setName('Abhinav');
    this.p13.setMobile(9567036724);
    this.p13.setAge(27);
    this.p13.setAddress('Bihar');

    this.p14 = new Person();
    this.p14.setName('Himanshu');
    this.p14.setMobile(9567024353);
    this.p14.setAge(12);
    this.p14.setAddress('Mumbai');

    this.p15 = new Person();
    this.p15.setName('Priyanshu');
    this.p15.setMobile(8912345876);
    this.p15.setAge(15);
    this.p15.setAddress('Bhopal');

    this.p16 = new Person();
    this.p16.setName('Pawan');
    this.p16.setMobile(7612345987);
    this.p16.setAge(39);
    this.p16.setAddress('Nainital');

    this.p17 = new Person();
    this.p17.setName('Neeraj');
    this.p17.setMobile(8912095649);
    this.p17.setAge(34);
    this.p17.setAddress('Jhansi');

    this.p18 = new Person();
    this.p18.setName('Riya');
    this.p18.setMobile(9562345679);
    this.p18.setAge(18);
    this.p18.setAddress('Unchahar');

    this.p19 = new Person();
    this.p19.setName('Sweety');
    this.p19.setMobile(7887987654);
    this.p19.setAge(17);
    this.p19.setAddress('Sultanpur');

    this.p20 = new Person();
    this.p20.setName('Ranjana');
    this.p20.setMobile(6543210987);
    this.p20.setAge(26);
    this.p20.setAddress('Lucknow');

    this.contacts.push(this.p1);
    this.contacts.push(this.p2);
    this.contacts.push(this.p3);
    this.contacts.push(this.p4);
    this.contacts.push(this.p5);
    this.contacts.push(this.p6);
    this.contacts.push(this.p7);
    this.contacts.push(this.p8);
    this.contacts.push(this.p9);
    this.contacts.push(this.p10);
    this.contacts.push(this.p11);
    this.contacts.push(this.p12);
    this.contacts.push(this.p13);
    this.contacts.push(this.p14);
    this.contacts.push(this.p15);
    this.contacts.push(this.p16);
    this.contacts.push(this.p17);
    this.contacts.push(this.p18);
    this.contacts.push(this.p19);
    this.contacts.push(this.p20);

    this.sort(this.name);
    this.personData = this.contacts[0];

    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user != null) {
      this.userName = this.user.name;
    }
  }

  sort(name) {
    this.contacts.sort((a, b) => {
      if (a[name] < b[name]) {
        return -1;
      }
      else if (a[name] > b[name]) {
        return 1;
      }
      else {
        return 0;
      }
    });
  }

  personDetails(person) {

    localStorage.setItem('user', JSON.stringify(person));
    alert(person.name + " " + 'details saved to Local storage.View Details on page refresh.');
  }

}
