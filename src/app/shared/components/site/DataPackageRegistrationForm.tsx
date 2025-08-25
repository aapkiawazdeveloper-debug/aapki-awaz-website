"use client";

import { FiCalendar } from "react-icons/fi";
import Disclaimer from "./Disclaimer";
import CustomDatePicker from "./ui/form/CustomDatePicker";
import CustomInput from "./ui/form/CustomInput";
import CustomRadioGroup from "./ui/form/CustomRadioGroup";
import CustomCheckbox from "./ui/form/CustomCheckbox";

import { useState } from "react";
import Button from "./ui/buttons/Button";
import PricingCard from "./ui/cards/PricingCard";

const DataPackageRegistrationForm = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<{
    name: string;
    duration: string;
  } | null>(null);

  return (
    <>
      <form className="grid grid-cols-12 gap-3 mt-4">
        <div className="col-span-12">
          <CustomInput label="Person Name:" />
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

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Aadhar Card Number:" id="aadhar_card_number" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Address:" id="address" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="City:" id="city" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="State:" id="state" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <CustomInput label="Country:" id="country" />
        </div>

        <div className="col-span-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Basic */}
            <PricingCard
              name="Basic"
              color="#6a1b9a"
              badgeColor="#ff9800"
              badgeTextColor="#fff"
              profileView={100}
              options={[
                { label: "30 Days", price: "₹5,000", duration: "30 Days" },
                { label: "90 Days", price: "₹6,500", duration: "90 Days" },
                { label: "180 Days", price: "₹7,500", duration: "180 Days" },
                { label: "365 Days", price: "₹8,500", duration: "365 Days" },
              ]}
              selected={
                selectedPackage?.name === "Basic"
                  ? selectedPackage.duration
                  : ""
              }
              onChange={(name, duration, price) => {
                const pkg = { name, duration, price };
                setSelectedPackage(pkg);
                console.log("Selected Package:", pkg);
              }}
            />

            {/* Silver */}
            <PricingCard
              name="Silver"
              color="#0277bd"
              badgeColor="#4caf50"
              badgeTextColor="#fff"
              profileView={250}
              options={[
                { label: "30 Days", price: "₹10,000", duration: "30 Days" },
                { label: "90 Days", price: "₹13,000", duration: "90 Days" },
                { label: "180 Days", price: "₹15,000", duration: "180 Days" },
                { label: "365 Days", price: "₹17,000", duration: "365 Days" },
              ]}
              selected={
                selectedPackage?.name === "Silver"
                  ? selectedPackage.duration
                  : ""
              }
              onChange={(name, duration, price) => {
                const pkg = { name, duration, price };
                setSelectedPackage(pkg);
                console.log("Selected Package:", pkg);
              }}
            />

            {/* Gold */}
            <PricingCard
              name="Gold"
              color="#212121"
              badgeColor="#ffc107"
              badgeTextColor="#fff"
              profileView={500}
              options={[
                { label: "30 Days", price: "₹15,000", duration: "30 Days" },
                { label: "90 Days", price: "₹19,500", duration: "90 Days" },
                { label: "180 Days", price: "₹22,500", duration: "180 Days" },
                { label: "365 Days", price: "₹22,500", duration: "365 Days" },
              ]}
              selected={
                selectedPackage?.name === "Gold" ? selectedPackage.duration : ""
              }
              onChange={(name, duration, price) => {
                const pkg = { name, duration, price };
                setSelectedPackage(pkg);
                console.log("Selected Package:", pkg);
              }}
            />

            {/* Platinum */}
            <PricingCard
              name="Platinum"
              color="#c62828"
              badgeColor="#9c27b0"
              badgeTextColor="#fff"
              profileView={1000}
              options={[
                { label: "30 Days", price: "₹25,000", duration: "30 Days" },
                { label: "90 Days", price: "₹32,500", duration: "90 Days" },
                { label: "180 Days", price: "₹37,500", duration: "180 Days" },
                { label: "365 Days", price: "₹42,500", duration: "365 Days" },
              ]}
              selected={
                selectedPackage?.name === "Platinum"
                  ? selectedPackage.duration
                  : ""
              }
              onChange={(name, duration, price) => {
                const pkg = { name, duration, price };
                setSelectedPackage(pkg);
                console.log("Selected Package:", pkg);
              }}
            />
          </div>
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

export default DataPackageRegistrationForm;
