"use client";

import { FiCalendar } from "react-icons/fi";
import Disclaimer from "./Disclaimer";
import CustomDatePicker from "./ui/form/CustomDatePicker";
import CustomInput from "./ui/form/CustomInput";
import CustomRadioGroup from "./ui/form/CustomRadioGroup";
import CustomTextarea from "./ui/form/CustomTextarea";
import CustomCheckbox from "./ui/form/CustomCheckbox";
import Link from "next/link";
import { useState } from "react";
import Button from "./ui/buttons/Button";

const BollywoodUserRegistrationForm = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <>
      <form className="grid grid-cols-12 gap-3 mt-4">
        <div className="col-span-12">
          <CustomInput label="Person Name / Producers / Directors Name / Co-Ordinators / Model / other Name:" />
        </div>

        <div className="col-span-12">
          <CustomRadioGroup
            label="Gender:"
            name="gender"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Office / Business Name:" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Business Designation:" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Office Number:" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Fax No:" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Residence Phone No:" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Mobile Number:" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Whats App Number:" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Email ID:" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Website:" />
        </div>

        <div className="col-span-12">
          <CustomTextarea label="About us (Personal):" id="about" rows={3} />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomTextarea
            label="Company Brief Detail:"
            id="company_details"
            rows={3}
          />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomTextarea
            label="Product / Service Detail:"
            id="service_details"
            rows={3}
          />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomDatePicker
            id="dob"
            label="Date of Birth"
            icon={<FiCalendar />}
          />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomDatePicker
            id="anniversaryDate"
            label="Date of Anniversary"
            icon={<FiCalendar />}
          />
        </div>

        <div className="col-span-12">
          <CustomRadioGroup
            label="Marital Status:"
            name="meritial_status"
            options={[
              { label: "Single", value: "single" },
              { label: "Married", value: "married" },
            ]}
          />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Aadhar Card Number:" id="aadhar_card_number" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Twitter Id:" id="twitter_id" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Facebook Id:" id="facebook_id" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Google Id:" id="google_id" />
        </div>

        <div className="col-span-12">
          <CustomTextarea
            label="Address (Office):"
            id="office_address"
            rows={3}
          />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="City (Office):" id="city_office" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="State (Office):" id="state_office" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Country (Office):" id="country_office" />
        </div>

        <div className="col-span-12">
          <CustomTextarea
            label="Residence City:"
            id="residence_city"
            rows={3}
          />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Country (Office):" id="country_office" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Residence State:" id="recidence_office" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Residence Country:" id="recidence_country" />
        </div>

        <div className="col-span-12">
          <CustomCheckbox
            id="agreement"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            label={
              <>
                I agree to be a member of https://www.aapkiawaz.in/ and agree to
                receive promotional information via E-Mail, SMS and Call.
              </>
            }
          />
        </div>

        <div className="col-span-12 sm:col-span-2">
          <Button title="Submit" type="submit" />
        </div>
      </form>
      <Disclaimer />
    </>
  );
};

export default BollywoodUserRegistrationForm;
