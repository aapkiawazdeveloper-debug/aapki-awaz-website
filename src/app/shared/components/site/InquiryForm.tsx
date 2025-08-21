"use client";

import { useState } from "react";
import CustomInput from "./ui/form/CustomInput";
import CustomRadioGroup from "./ui/form/CustomRadioGroup";
import CustomTextarea from "./ui/form/CustomTextarea";
import ReCAPTCHA from "react-google-recaptcha";
import CustomCheckbox from "./ui/form/CustomCheckbox";
import Link from "next/link";
import Button from "./ui/button/Button";

const InquiryForm = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div>
      <form className="grid grid-cols-12 gap-3">
        <div className="col-span-12">
          <CustomInput label="Name" />
        </div>

        <div className="col-span-12">
          <CustomRadioGroup
            label="Gender"
            name="gender"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
        </div>

        <div className="col-span-12">
          <CustomTextarea
            label="Product / Service Detail"
            id="message"
            rows={3}
          />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Office / Business Name" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Office / Business Name" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Profession" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="E-mail" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Website" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Office Number" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Mobile Number" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Mobile Number" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomTextarea label="Office Address" id="office_address" rows={3} />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomTextarea
            label="Business Profile Description"
            id="profile_description"
            rows={3}
          />
        </div>

        <div className="col-span-12">
          <CustomCheckbox
            id="agreement"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            label={
              <>
                I agree to be a member of{" "}
                <Link
                  href="https://www.aapkiawaz.in/"
                  target="_blank"
                  className="text-[#337ab7] underline"
                >
                  https://www.aapkiawaz.in/
                </Link>{" "}
                and agree to receive promotional information via E-Mail, SMS,
                Voice Call, WhatsApp, Rich Communication Services (“RCS”) and
                Voice. Please do go through the{" "}
                <Link
                  href="/terms"
                  target="_blank"
                  className="text-[#337ab7] underline"
                >
                  Terms & Conditions
                </Link>{" "}
                before using any of the services. By submitting the form, I
                agree to the{" "}
                <Link
                  href="/privacy"
                  target="_blank"
                  className="text-[#337ab7] underline"
                >
                  Privacy Policy
                </Link>
                .
              </>
            }
          />
        </div>

        <div className="col-span-12">
          <ReCAPTCHA className="mt-4"
            sitekey={"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
            onChange={(value) => setCaptchaValue(value)}
          />
        </div>

        <div className="col-span-12">
          <Button />
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
          given to add / submit / update your listing.
        </p>
      </div>
    </div>
  );
};

export default InquiryForm;
