import timg1 from "/public/images/team/1.png";
import timg2 from "/public/images/team/2.png";
import timg3 from "/public/images/team/3.png";
import timg4 from "/public/images/team/4.png";
import timg5 from "/public/images/team/5.png";
import timg6 from "/public/images/team/6.png";

import Stime1 from "/public/images/team-single/1.jpg";
import Stime2 from "/public/images/team-single/2.jpg";
import Stime3 from "/public/images/team-single/3.jpg";
import Stime4 from "/public/images/team-single/4.jpg";
import Stime5 from "/public/images/team-single/5.jpg";
import Stime6 from "/public/images/team-single/6.jpg";

const Teams = [
  {
    id: "1",
    title: "Dr. Marlene Henry",
    subtitle: "Dental Care Specialist",
    slug: "Marlene-Henry",
    timg: timg1,
    Sime: Stime1,
    position: "Lead Dental Surgeon",
    practiceArea: "General & Cosmetic Dentistry",
    experience: "14 years, New York Dental Excellence Center",
    address: "123 Medical Avenue, New York, NY 10001",
    phone: "(603) 555-0110",
    email: "m.henry@medically.com",
    tagline: "Dedicated Dental Specialist. Restoring Smiles, Changing Lives.",
    education: [
      "DDS, Columbia University College of Dental Medicine",
      "Residency in Oral Surgery, Mount Sinai Hospital, New York",
      "Fellowship in Cosmetic Dentistry, NYU Langone Health",
      "Board Certified, American Dental Association",
    ],
    experienceParagraph1:
      "Dr. Marlene Henry has dedicated over 14 years to perfecting the art and science of dentistry. Specializing in both general and cosmetic procedures, she has transformed thousands of smiles using the latest techniques in digital imaging, laser dentistry, and ceramic restorations. Her commitment to pain-free, anxiety-free care has earned her a loyal patient community across the New York metro area.",
    experienceParagraph2:
      "A recognized educator in her field, Dr. Henry has lectured at dental conferences across North America and contributes regularly to peer-reviewed journals on cosmetic reconstruction and preventative oral health. She believes deeply that a healthy smile is fundamental to a patient's confidence and overall quality of life.",
    skills: [
      { label: "Cosmetic & Restorative Dentistry", value: 95 },
      { label: "Patient Satisfaction", value: 98 },
      { label: "Dental Implant Procedures", value: 88 },
      { label: "Pediatric Dentistry", value: 80 },
    ],
    achievements: [
      { years: "2022 - 2023", award: "Northeast Dental Excellence Award" },
      { years: "2020 - 2021", award: "Top Cosmetic Dentist — New York Magazine" },
      { years: "2018 - 2019", award: "Columbia University Alumni Achievement Award" },
      { years: "2016 - 2017", award: "American Dental Association Rising Star" },
      { years: "2014 - 2015", award: "Best New Practitioner Award, ADA" },
    ],
  },
  {
    id: "2",
    title: "Dr. Dianne Russell",
    subtitle: "Pharmacology Specialist",
    slug: "Dianne-Russell",
    timg: timg2,
    Sime: Stime2,
    position: "Chief Clinical Pharmacologist",
    practiceArea: "Clinical Pharmacology & Drug Therapy Management",
    experience: "11 years, Johns Hopkins Medical Center",
    address: "456 Wellness Blvd, Baltimore, MD 21205",
    phone: "(603) 555-0122",
    email: "d.russell@medically.com",
    tagline: "Precision Pharmacology. Safer Treatments, Better Outcomes.",
    education: [
      "PharmD, University of Maryland School of Pharmacy",
      "Residency in Clinical Pharmacology, Johns Hopkins Hospital",
      "Fellowship in Oncology Pharmacotherapy, NIH",
      "Board Certified Pharmacotherapy Specialist (BCPS)",
    ],
    experienceParagraph1:
      "Dr. Dianne Russell is one of the most respected clinical pharmacologists in the country, with 11 years of expertise in medication therapy management and complex polypharmacy cases. At Johns Hopkins, she led the pharmacy team in developing hospital-wide protocols that reduced drug-related adverse events by 34%, significantly improving patient safety across multiple wards.",
    experienceParagraph2:
      "Dr. Russell is deeply passionate about personalized medicine, working closely with oncologists, cardiologists, and endocrinologists to design drug regimens calibrated to each patient's genetic, metabolic, and clinical profile. She has authored over 20 publications in the field of pharmacogenomics and is a sought-after speaker at national pharmacy symposia.",
    skills: [
      { label: "Medication Therapy Management", value: 97 },
      { label: "Drug Interaction Analysis", value: 95 },
      { label: "Pharmacogenomics", value: 90 },
      { label: "Patient Counseling", value: 92 },
    ],
    achievements: [
      { years: "2023 - 2024", award: "American Society of Health-System Pharmacists Award" },
      { years: "2021 - 2022", award: "NIH Clinical Pharmacology Excellence Award" },
      { years: "2019 - 2020", award: "Top Pharmacist in Practice — Pharmacy Today" },
      { years: "2017 - 2018", award: "Johns Hopkins Patient Safety Champion Award" },
      { years: "2015 - 2016", award: "BCPS Rising Professional Award" },
    ],
  },
  {
    id: "3",
    title: "Dr. Jerome Bell",
    subtitle: "Orthopedic Surgeon",
    slug: "Jerome-Bell",
    timg: timg3,
    Sime: Stime3,
    position: "Senior Orthopedic Surgeon",
    practiceArea: "Joint Replacement & Sports Medicine",
    experience: "16 years, Hospital for Special Surgery, New York",
    address: "535 East 70th Street, New York, NY 10021",
    phone: "(603) 555-0133",
    email: "j.bell@medically.com",
    tagline: "Orthopedic Precision. Restoring Movement, Rebuilding Lives.",
    education: [
      "MD, Harvard Medical School",
      "Residency in Orthopedic Surgery, Hospital for Special Surgery",
      "Fellowship in Sports Medicine & Arthroscopic Surgery, UCSF",
      "Board Certified, American Academy of Orthopaedic Surgeons (AAOS)",
    ],
    experienceParagraph1:
      "Dr. Jerome Bell is a highly accomplished orthopedic surgeon with 16 years of subspecialty experience in joint replacement and sports-related injuries. His practice at the Hospital for Special Surgery — consistently ranked the #1 orthopedic hospital in the nation — has given him unparalleled exposure to complex cases including revision arthroplasty, ACL reconstruction, and total knee and hip replacement using robotic-assisted surgical systems.",
    experienceParagraph2:
      "Dr. Bell is the team orthopedic physician for two professional sports organizations and has been instrumental in bringing athletes back to peak performance after career-threatening injuries. His academic contributions include over 35 peer-reviewed publications and several chapters in major orthopedic surgery textbooks.",
    skills: [
      { label: "Joint Replacement Surgery", value: 96 },
      { label: "Sports Injury Rehabilitation", value: 90 },
      { label: "Minimally Invasive Procedures", value: 93 },
      { label: "Patient Recovery Rate", value: 94 },
    ],
    achievements: [
      { years: "2023 - 2024", award: "AAOS Kappa Delta Award for Orthopaedic Research" },
      { years: "2021 - 2022", award: "Best Orthopedic Surgeon — New York Health Awards" },
      { years: "2019 - 2020", award: "HSS Surgical Excellence Citation" },
      { years: "2017 - 2018", award: "Harvard Medical Alumni Innovation Award" },
      { years: "2014 - 2015", award: "Sports Medicine Breakthrough Award, AOSSM" },
    ],
  },
  {
    id: "4",
    title: "Dr. Leslie Alexander",
    subtitle: "Gynecology Specialist",
    slug: "Leslie-Alexander",
    timg: timg4,
    Sime: Stime4,
    position: "Head of Gynecology & Women's Health",
    practiceArea: "Minimally Invasive Gynecologic Surgery & Reproductive Health",
    experience: "13 years, Mayo Clinic, Rochester",
    address: "200 First Street SW, Rochester, MN 55905",
    phone: "(603) 555-0144",
    email: "l.alexander@medically.com",
    tagline: "Compassionate Women's Care. Empowering Health at Every Stage of Life.",
    education: [
      "MD, Johns Hopkins University School of Medicine",
      "Residency in Obstetrics & Gynecology, Mayo Clinic",
      "Fellowship in Minimally Invasive Gynecologic Surgery, Cleveland Clinic",
      "Board Certified, American Board of Obstetrics and Gynecology (ABOG)",
    ],
    experienceParagraph1:
      "Dr. Leslie Alexander has built a distinguished 13-year career at the intersection of surgical excellence and compassionate women's health care. Her expertise in laparoscopic and robotic gynecologic surgery has helped hundreds of patients with complex conditions — including endometriosis, uterine fibroids, and ovarian cysts — achieve lasting relief with minimal recovery times.",
    experienceParagraph2:
      "Beyond surgery, Dr. Alexander is a vocal advocate for women's preventive health, running community wellness programs at the Mayo Clinic and serving on national committees advancing guidelines for reproductive health screening. Her research has been published in leading gynecology journals and presented at ACOG congresses worldwide.",
    skills: [
      { label: "Minimally Invasive GYN Surgery", value: 95 },
      { label: "Reproductive Health Counseling", value: 92 },
      { label: "Endometriosis Management", value: 94 },
      { label: "Patient Satisfaction", value: 97 },
    ],
    achievements: [
      { years: "2023 - 2024", award: "ACOG Excellence in Patient Care Award" },
      { years: "2021 - 2022", award: "Top Women's Health Physician — Mayo Clinic Recognition" },
      { years: "2019 - 2020", award: "Robotic Surgery Innovation Award, AAGL" },
      { years: "2017 - 2018", award: "Johns Hopkins Medical Alumni Award" },
      { years: "2015 - 2016", award: "Best New Gynecologic Surgeon — Midwest Health Summit" },
    ],
  },
  {
    id: "5",
    title: "Dr. Alexander Leslie",
    subtitle: "Rehabilitation Specialist",
    slug: "Alexander-Leslie",
    timg: timg5,
    Sime: Stime5,
    position: "Director of Physical Medicine & Rehabilitation",
    practiceArea: "Neurological & Post-Surgical Rehabilitation",
    experience: "12 years, Shirley Ryan AbilityLab, Chicago",
    address: "355 East Erie Street, Chicago, IL 60611",
    phone: "(603) 555-0155",
    email: "a.leslie@medically.com",
    tagline: "Rehabilitation Champion. Empowering Recovery, One Patient at a Time.",
    education: [
      "MD, Northwestern University Feinberg School of Medicine",
      "Residency in Physical Medicine & Rehabilitation, Shirley Ryan AbilityLab",
      "Fellowship in Neurorehabilitation, UCSF Medical Center",
      "Board Certified, American Board of Physical Medicine and Rehabilitation",
    ],
    experienceParagraph1:
      "Dr. Alexander Leslie is a leading physiatrist with 12 years of specialized experience in neurological and orthopedic rehabilitation at the world-renowned Shirley Ryan AbilityLab. He has spearheaded innovative, patient-centered recovery programs for stroke survivors, spinal cord injury patients, and individuals undergoing complex post-surgical rehabilitation, consistently delivering measurable improvements in functional independence.",
    experienceParagraph2:
      "Dr. Leslie is a pioneer in integrated rehabilitation, combining traditional physical therapy with emerging technologies including robotic exoskeletons, virtual reality training, and functional electrical stimulation. He has published extensively on outcomes-based rehabilitation models and is a keynote speaker at international physiatry congresses.",
    skills: [
      { label: "Neurological Rehabilitation", value: 96 },
      { label: "Post-Surgical Recovery Programs", value: 93 },
      { label: "Assistive Technology Integration", value: 91 },
      { label: "Patient Functional Outcomes", value: 95 },
    ],
    achievements: [
      { years: "2023 - 2024", award: "ACRM Distinguished Member Award" },
      { years: "2021 - 2022", award: "Top Rehabilitation Physician — U.S. News Health" },
      { years: "2019 - 2020", award: "Shirley Ryan AbilityLab Innovator Award" },
      { years: "2017 - 2018", award: "Northwestern Faculty Research Excellence Award" },
      { years: "2015 - 2016", award: "Best Physiatrist in Practice — Chicago Medical Society" },
    ],
  },
  {
    id: "6",
    title: "Dr. Cody Fisher",
    subtitle: "Cardiovascular Surgeon",
    slug: "Cody-Fisher",
    timg: timg6,
    Sime: Stime6,
    position: "Chief Cardiovascular & Thoracic Surgeon",
    practiceArea: "Open Heart Surgery & Minimally Invasive Cardiac Procedures",
    experience: "18 years, Cleveland Clinic Heart, Vascular & Thoracic Institute",
    address: "9500 Euclid Avenue, Cleveland, OH 44195",
    phone: "(603) 555-0166",
    email: "c.fisher@medically.com",
    tagline: "Heart Surgery Pioneer. Precision Care for Every Heartbeat.",
    education: [
      "MD, Yale School of Medicine",
      "Residency in Cardiothoracic Surgery, Cleveland Clinic",
      "Fellowship in Minimally Invasive Cardiac Surgery, Texas Heart Institute",
      "Board Certified, American Board of Thoracic Surgery (ABTS)",
    ],
    experienceParagraph1:
      "Dr. Cody Fisher stands among the nation's most in-demand cardiac surgeons, with over 18 years of experience performing complex open-heart surgeries and pioneering minimally invasive cardiac interventions at the Cleveland Clinic — the #1-ranked heart center in the United States. His expertise spans coronary artery bypass grafting, valve repair and replacement, thoracic aortic surgery, and advanced heart failure surgical therapies.",
    experienceParagraph2:
      "Dr. Fisher has performed over 4,000 cardiac surgeries with outcomes consistently above national benchmarks. He leads an active research program investigating next-generation ventricular assist devices and transcatheter valve technologies. His work has earned him international recognition, and he regularly trains cardiac surgeons from around the world in advanced minimally invasive techniques.",
    skills: [
      { label: "Open Heart & CABG Surgery", value: 98 },
      { label: "Valve Repair & Replacement", value: 96 },
      { label: "Minimally Invasive Cardiac Surgery", value: 94 },
      { label: "Patient Survival Outcomes", value: 97 },
    ],
    achievements: [
      { years: "2023 - 2024", award: "STS Presidential Citation for Cardiac Surgery Excellence" },
      { years: "2021 - 2022", award: "Cleveland Clinic Surgical Innovation Award" },
      { years: "2019 - 2020", award: "AATS Graham Award for Cardiothoracic Research" },
      { years: "2017 - 2018", award: "Yale Medical Alumni Lifetime Achievement in Surgery" },
      { years: "2015 - 2016", award: "Best Cardiac Surgeon — U.S. News & World Report" },
    ],
  },
];

export default Teams;
