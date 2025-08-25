"use client";

import { useState } from "react";
import CustomInput from "./ui/form/CustomInput";
import CustomRadioGroup from "./ui/form/CustomRadioGroup";
import CustomTextarea from "./ui/form/CustomTextarea";
import CustomCheckbox from "./ui/form/CustomCheckbox";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "./ui/buttons/Button";
import CustomDatePicker from "./ui/form/CustomDatePicker";
import { FiCalendar } from "react-icons/fi";
import CustomImageUploader from "./ui/form/CustomImageUploader";

const BusinessAssociatesReporterRegistrationForm = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <>
      <form className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <CustomRadioGroup
            label="Gender"
            name="gender"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput id="personName" label="Person Name:" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput id="profession" label="Profession:" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput id="education" label="Education:" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput id="email" label="E-mail:" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput id="homePhone" label="Home Phone:" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput id="mobileNumber" label="Mobile Number:" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput id="whatsappNumber" label="Whatsapp Number:" />
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
          <CustomTextarea label="Address:" id="address" rows={3} />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput id="city" label="City:" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput id="state" label="State:" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput id="country" label="Country:" />
        </div>

        <div className="col-span-12">
          <CustomImageUploader
            id="profilePic"
            label="Profile Picture"
            onChange={(file) => console.log("Uploaded File:", file)}
          />
        </div>

        <div className="col-span-12">
          <CustomCheckbox
            id="agreement"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            label={
              <>
                I agree to be a member of https://www.aapkiawaz.in/ and agree to
                receive promotional information via E-Mail, SMS and Call.{" "}
              </>
            }
          />
        </div>

        <div className="col-span-12 sm:col-span-2">
          <Button title="Submit" type="submit" />
        </div>
      </form>
      <div className="flex flex-col gap-y-1 mt-4">
        <h2 className="text-xl font-medium">DISCLAIMER</h2>
        <p className="text-sm text-[#666] font-normal">
          https://www.aapkiawaz.in/ does not support or endorse the accuracy or
          reliability of any information, content, copyright compliance,
          legality or advertisements contained, distributed through, or linked,
          decency of material contained in sites listed in our online directory
          or hard copy. Every effort has been made to compile complete and
          accurate information for this directory. The information contained
          herein should not be construed as an endorsement of any member,
          company, or individual, nor reflect in any way upon the products
          and/or services provided by an organization or individual. We are
          committed to provide a database that is accurate, up-to-date and
          comprehensive. Users of this Directory are advised that this
          information is provided as a general reference only. Copying of this
          information in whole or part for the purposes of sale, inclusion in or
          with any product, or copying as content for another website is
          strictly prohibited. https://www.aapkiawaz.in/ - reserves the right,
          without any obligation whatsoever, to make improvements to, remove any
          listing or correct any error or omissions in any part of the
          https://www.aapkiawaz.in/. If you find an error, please notify us. To
          add or remove or amend the listing in https://www.aapkiawaz.in/ kindly
          send us an email at info@www.aapkiawaz.in or kindly fill up the form
          given to add / submit / update your listing
        </p>
      </div>
    </>
  );
};

export default BusinessAssociatesReporterRegistrationForm;
