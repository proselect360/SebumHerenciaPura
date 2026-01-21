// src/app/page.jsx
"use client";

import React from "react";
import Header from "../assets/components/Header";
import Hero from "../assets/components/Hero";
import Benefits from "../assets/components/Benefits";
import Products from "../assets/components/Products";
import Guarantee from "../assets/components/Guarantee";
import HowToUse from "../assets/components/HowToUse";
import Ingredients from "../assets/components/Ingredients";
import Comparison from "../assets/components/Comparison";
import CallToAction from "../assets/components/CallToAction";
import QualityBadges from "../assets/components/QualityBadges";
import ShippingAndPayment from "../assets/components/ShippingAndPayment";
import About from "../assets/components/About";
import { FAQ } from "../assets/components/FAQ";
import Footer from "../assets/components/Footer";
import FloatingWhatsApp from "../assets/components/FloatingWhatsApp";
import Beneficioscebo from "../assets/components/Beneficioscebo";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Beneficioscebo />
        <Comparison />
        <Products />
        <Ingredients />
        <HowToUse />
        <QualityBadges />
        <ShippingAndPayment />
        <CallToAction />
        <Guarantee />
        <About />
        <FAQ />
        <FloatingWhatsApp />
      </main>
      <Footer />
    </div>
  );
}
