import PageLayout from "@/components/PageLayout";

const TermsAndConditions = () => (
  <PageLayout>
    <section className="py-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Terms And Conditions</h1>
        <p className="text-muted-foreground text-sm mb-8">Last updated: March 15, 2026</p>
        <p className="text-muted-foreground mb-8">Please read these terms and conditions carefully before using Our Service.</p>

        <h2 className="font-heading text-2xl font-bold mt-10 mb-4">Interpretation And Definitions</h2>
        <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Interpretation</h3>
        <p className="text-muted-foreground mb-4">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

        <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Definitions</h3>
        <p className="text-muted-foreground mb-4">For the purposes of these Terms and Conditions:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
          <li><strong className="text-foreground">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to ArkTechify.</li>
          <li><strong className="text-foreground">Country</strong> refers to India.</li>
          <li><strong className="text-foreground">Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
          <li><strong className="text-foreground">Service</strong> refers to the Website.</li>
          <li><strong className="text-foreground">Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
          <li><strong className="text-foreground">Website</strong> means ArkTechify, accessible from <a href="https://arktechify.com" className="text-primary hover:underline">https://arktechify.com</a></li>
          <li><strong className="text-foreground">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
        </ul>

        <h2 className="font-heading text-2xl font-bold mt-10 mb-4">Acknowledgment</h2>
        <p className="text-muted-foreground mb-4">These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
        <p className="text-muted-foreground mb-4">Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
        <p className="text-muted-foreground mb-4">By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
        <p className="text-muted-foreground mb-4">You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>

        <h2 className="font-heading text-2xl font-bold mt-10 mb-4">Links To Other Websites</h2>
        <p className="text-muted-foreground mb-4">Our Service may contain links to third-party web sites or services that are not owned or controlled by ArkTechify.</p>
        <p className="text-muted-foreground mb-4">ArkTechify has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that ArkTechify shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>

        <h2 className="font-heading text-2xl font-bold mt-10 mb-4">Termination</h2>
        <p className="text-muted-foreground mb-4">We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
        <p className="text-muted-foreground mb-4">Upon termination, Your right to use the Service will cease immediately.</p>

        <h2 className="font-heading text-2xl font-bold mt-10 mb-4">Limitation Of Liability</h2>
        <p className="text-muted-foreground mb-4">Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
        <p className="text-muted-foreground mb-4">To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>

        <h2 className="font-heading text-2xl font-bold mt-10 mb-4">"AS IS" And "AS AVAILABLE" Disclaimer</h2>
        <p className="text-muted-foreground mb-4">The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice.</p>

        <h2 className="font-heading text-2xl font-bold mt-10 mb-4">Governing Law</h2>
        <p className="text-muted-foreground mb-4">The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>

        <h2 className="font-heading text-2xl font-bold mt-10 mb-4">Disputes Resolution</h2>
        <p className="text-muted-foreground mb-4">If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>

        <h2 className="font-heading text-2xl font-bold mt-10 mb-4">Severability And Waiver</h2>
        <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Severability</h3>
        <p className="text-muted-foreground mb-4">If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
        <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Waiver</h3>
        <p className="text-muted-foreground mb-4">Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>

        <h2 className="font-heading text-2xl font-bold mt-10 mb-4">Changes To These Terms And Conditions</h2>
        <p className="text-muted-foreground mb-4">We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>

        <h2 className="font-heading text-2xl font-bold mt-10 mb-4">Contact Us</h2>
        <p className="text-muted-foreground mb-2">If you have any questions about these Terms and Conditions, You can contact us:</p>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>By email: <a href="mailto:sales@arktechify.com" className="text-primary hover:underline">sales@arktechify.com</a></li>
        </ul>
      </div>
    </section>
  </PageLayout>
);

export default TermsAndConditions;
