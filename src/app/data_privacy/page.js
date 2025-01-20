import BackHeader from "../components/BackHeader";

export default function DataPrivacy() {

    return (
        <div className="mx-auto max-w-screen-lg *:leading-relaxed my-12 ">
            <BackHeader />
            <h1 className="text-2xl font-bold mb-4">Data Protection Statement</h1>

            <h2 className="text-xl mb-1 mt-4">1. General Information</h2>
            <p>
                This website is operated by Grado Babo, Handjerystraße 55, 12161 Berlin, Germany,
                gradobaboberlin@gmail.com (hereinafter “we“ or “us”). If you have any questions
                regarding data protection, please contact us at the contact details above.
            </p>

            <h2 className="text-xl mb-1 mt-4">2. Processing of Personal Data and Transfer to Third Parties</h2>
            <h3 className="text-lg mb-1 mt-3">2.1 Data Collected Automatically</h3>
            <p>
                Upon use of our website, some personal data are automatically collected about your
                device (computer, mobile phone, tablet, etc.). This includes the IP address, date,
                time, browser, operating system, and pages retrieved. These data are processed for
                data security, optimizing our services, and improving our website. The legal basis
                is Article 6(1)(f) GDPR, which represents our legitimate interest.
            </p>

            <h3 className="text-lg mb-1 mt-3">2.2 Data Provided via Contact</h3>
            <p>
                If you contact us (e.g., via email), we process only the personal data necessary
                to address and respond to your inquiry.
            </p>

            <h3 className="text-lg mb-1 mt-3">2.3 Use of Service Providers</h3>
            <p>
                To facilitate the data processing outlined in this statement (e.g., hosting and
                website maintenance), we use service providers.
            </p>

            <h2 className="text-xl mb-1 mt-4">3. Cookies</h2>
            <h3 className="text-lg mb-1 mt-3">3.1 General Use of Cookies</h3>
            <p>
                Cookies are small text files stored on your device to improve user experience and
                enable specific website functionalities. Session cookies are deleted after closing
                your browser, while persistent cookies remain on your device. You can configure
                your browser to manage cookies or disable them entirely, though this may limit
                website functionality. By accepting our “Cookie-Banner,” you consent to the use
                of cookies as described, based on Article 6(1)(a) GDPR.
            </p>

            <h3 className="text-lg mb-1 mt-3">3.2 Adobe Analytics</h3>
            <p>
                We use Adobe Analytics to analyze website usage. Data collected via cookies is
                anonymized and processed on servers in Ireland and the USA. Adobe provides
                detailed information on how to opt out at
                <a href="http://www.adobe.com/privacy/opt-out.html" target="_blank" className="text-blue-500">Adobe Privacy Opt-Out</a>.
            </p>

            <h3 className="text-lg mb-1 mt-3">3.3 Google Analytics</h3>
            <p>
                We use Google Analytics to evaluate website activity. Data collected via cookies
                is processed in anonymized form within the EU or, in some cases, transferred to
                the USA. You can prevent data collection by Google through a browser plug-in at
                <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" className="text-blue-500">Google Analytics Opt-Out</a>.
            </p>

            <h3 className="text-lg mb-1 mt-3">3.4 Advertising Cookies</h3>
            <p>
                We use third-party advertising cookies, such as Facebook Pixel, to analyze user
                behavior and display relevant ads. For more information, refer to
                <a href="https://www.facebook.com/policy" target="_blank" className="text-blue-500">Facebook&apos;s Privacy Policy</a>.
                You can manage your preferences at
                <a href="http://www.youronlinechoices.com/uk/your-ad-choices/" target="_blank" className="text-blue-500">Your Online Choices</a>.
            </p>

            <h3 className="text-lg mb-1 mt-3">3.5 Pseudonymisation</h3>
            <p>
                We pseudonymize data collected through analysis and advertising cookies. This
                ensures that the data cannot be directly associated with individual users.
            </p>

            <h3 className="text-lg mb-1 mt-3">3.6 Consent</h3>
            <p>
                By clicking “accept” in our cookie banner, you consent to the processing of your
                personal data for analytics and advertising purposes in accordance with Article 6(1)(a) GDPR.
            </p>

            <h2 className="text-xl mb-1 mt-4">4. Provision of Personal Data and Storage Periods</h2>
            <p>
                Providing personal data is voluntary. Data are stored only until the purpose of
                processing is fulfilled, unless statutory or contractual obligations require longer
                retention periods. In such cases, data are blocked rather than deleted.
            </p>

            <h2 className="text-xl mb-1 mt-4">5. Your Rights</h2>
            <p>
                As per the GDPR, you have the right to:
            </p>
            <ul className="list-disc list-inside ml-4">
                <li>Access and obtain information about your personal data (Article 15 GDPR).</li>
                <li>Correct inaccurate or incomplete personal data (Article 16 GDPR).</li>
                <li>Request the deletion of your personal data (Article 17 GDPR).</li>
                <li>Restrict the processing of your personal data (Article 18 GDPR).</li>
                <li>Data portability (Article 20 GDPR).</li>
                <li>Withdraw consent at any time (Article 7 GDPR).</li>
                <li>Object to data processing (Article 21 GDPR).</li>
            </ul>
            <p>
                To exercise these rights, please contact us using the details provided in section 1.
                Additionally, you may lodge a complaint with the competent supervisory authority
                if you believe data processing violates the GDPR (Article 77 GDPR).
            </p>

            <p className="mt-4 text-sm text-gray-500">As of: May 2018 / AG</p>
        </div>
    );
}
