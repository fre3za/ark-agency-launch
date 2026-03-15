import PageLayout from "@/components/PageLayout";

const PrivacyPolicy = () => (
  <PageLayout>
    <section className="py-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">The purpose of this privacy policy is to address the declaration of our 'Prevention of Personal Information and Data'. It's an expression of commitment from ArkTechify to respect the privacy of its employees, trainees, business partners, clients, customers, merchants, and job applicants. We are highly cautious & concerned about the solitude of all our belonging ones! It's an assurance of our responsibilities towards our work ethics and dedication to maintain transparency within our proceedings via maintaining the secrecy of your data & personal information. Any sort of unethical or unauthorized use/process of such data is subject to legal action and lawful punishment!</p>

        <p className="text-muted-foreground mb-8">Here to 'process' or 'processing' means any use of personal data including transferring, collecting, recording, storing, using, analyzing, combining, disclosing, or deleting – PI such as your first and last name, email address, postal address, phone number, user name and password, social media handle, date of birth (protected characteristics such as gender, age, race, or color), education history, degrees or certifications, job description, designation, salary, job history, job interest, financial records, medical condition, biometric identifiers, voice recordings, etc! For us, your personal information is our confidential data and a valuable asset for the Company; hence it's our foremost responsibility to provide appropriate safeguard & protection to it.</p>

        <h2 className="font-heading text-2xl font-bold mt-10 mb-4">Personal Information We Collect</h2>
        <p className="text-muted-foreground mb-4">We have access to the next information about merchant and their store provided by Shopify:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
          <li>The shop's street address.</li>
          <li>The optional second line of the shop's address.</li>
          <li>The shop's city.</li>
          <li>The shop's country.</li>
          <li>The two-letter country code corresponding to the shop's country.</li>
          <li>The shop's normalized country name.</li>
          <li>The date and time (ISO 8601) when the shop was created.</li>
          <li>The date and time (ISO 8601) when the shop was last updated.</li>
          <li>The contact email used for communication between the shop owner and the customer.</li>
          <li>The three-letter code for the currency that the shop accepts.</li>
          <li>The shop's domain.</li>
          <li>The contact email used for communication between Shopify and the shop owner.</li>
          <li>The GSuite URL for the store, if applicable.</li>
          <li>Whether the GSuite login is enabled.</li>
          <li>The ID for the shop.</li>
          <li>The latitude of the shop's location.</li>
        </ul>

        <h2 className="font-heading text-2xl font-bold mt-10 mb-4">Storage Your Personal Information</h2>
        <p className="text-muted-foreground mb-4">The Data is stored in the database of applications on the server. Direct access to the database from the outside is not possible. Crucial data (such as passwords) is stored in an encrypted form. To access store resources, we use temporary OAuth2 tokens according to the requirements of Shopify & Bigcommerce. We keep the data for 3 years after the end of the use of our services.</p>

        <h2 className="font-heading text-2xl font-bold mt-10 mb-4">Your Rights</h2>
        <p className="text-muted-foreground mb-4">If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>
        <p className="text-muted-foreground mb-4">Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.</p>

        <h2 className="font-heading text-2xl font-bold mt-10 mb-4">Contact Us</h2>
        <p className="text-muted-foreground mb-2">If you have any questions about this Privacy Policy, You can contact us:</p>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>By email: <a href="mailto:sales@arktechify.com" className="text-primary hover:underline">sales@arktechify.com</a></li>
        </ul>
      </div>
    </section>
  </PageLayout>
);

export default PrivacyPolicy;
