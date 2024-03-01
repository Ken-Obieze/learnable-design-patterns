class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

  // Method to add a new phone number
  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber);
  }

  // Method to remove a phone number
  removePhoneNumber(phoneNumber) {
    const index = this.phoneNumbers.indexOf(phoneNumber);
    if (index !== -1) {
      this.phoneNumbers.splice(index, 1);
    }
  }

  // Method to dial a phone number and notify observers
  dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.includes(phoneNumber)) {
      this.notifyObservers(phoneNumber);
    } else {
      console.log("Phone number not found.");
    }
  }

  // Method to add an observer
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Method to remove an observer
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  // Method to notify observers
  notifyObservers(phoneNumber) {
    this.observers.forEach(observer => observer.update(phoneNumber));
  }
}

class PhoneNumberObserver {
  update(phoneNumber) {
    console.log("Dialed:", phoneNumber);
  }
}

class DialingObserver {
  update(phoneNumber) {
    console.log("Now Dialling", phoneNumber);
  }
}

// Creating a telephone instance
const telephone = new Telephone();

// Adding observers
const phoneNumberObserver = new PhoneNumberObserver();
const dialingObserver = new DialingObserver();
telephone.addObserver(phoneNumberObserver);
telephone.addObserver(dialingObserver);

// Adding phone numbers
telephone.addPhoneNumber("1234567890");
telephone.addPhoneNumber("2345678901");

// Dialing a phone number
telephone.dialPhoneNumber("1234567890");
telephone.dialPhoneNumber("2347023232"); // This should not dial and show "Phone number not found."

// Adding more phone numbers
telephone.addPhoneNumber("3456789012");
telephone.addPhoneNumber("4567890123");
telephone.addPhoneNumber("5678901234");

// Removing a phone number
telephone.removePhoneNumber("2345678901");

// Dialing existing phone numbers
telephone.dialPhoneNumber("3456789012");
telephone.dialPhoneNumber("1234567890");

// Dialing a phone number that was removed
telephone.dialPhoneNumber("2345678901"); // Should show "Phone number not found."

// Removing a phone number that doesn't exist
telephone.removePhoneNumber("9876543210"); // Should not affect the phone numbers list

// Dialing with no observers added
telephone.removeObserver(phoneNumberObserver);
telephone.removeObserver(dialingObserver);
telephone.dialPhoneNumber("3456789012"); // Should not print anything

// Adding observers again
telephone.addObserver(phoneNumberObserver);
telephone.addObserver(dialingObserver);

// Removing all phone numbers
telephone.removePhoneNumber("1234567890");
telephone.removePhoneNumber("3456789012");
telephone.removePhoneNumber("4567890123");
telephone.removePhoneNumber("5678901234");

// Trying to dial when no phone numbers are added
telephone.dialPhoneNumber("1234567890"); // Should show "Phone number not found."

// Adding same phone number multiple times
telephone.addPhoneNumber("1234567890");
telephone.addPhoneNumber("1234567890");

// Dialing a phone number added multiple times
telephone.dialPhoneNumber("1234567890"); // Should notify observers once

// Removing a phone number added multiple times
telephone.removePhoneNumber("1234567890"); // Should remove only one instance

// Adding and dialing a new phone number
telephone.addPhoneNumber("6789012345");
telephone.dialPhoneNumber("6789012345");

// Removing an observer
telephone.removeObserver(phoneNumberObserver);

// Dialing a phone number with one observer removed
telephone.dialPhoneNumber("6789012345");

// Removing the last observer
telephone.removeObserver(dialingObserver);

// Dialing a phone number with all observers removed
telephone.dialPhoneNumber("6789012345"); // Should not print anything
