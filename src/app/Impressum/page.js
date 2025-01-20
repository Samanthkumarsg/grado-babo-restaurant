import BackHeader from "../components/BackHeader";

export default function DataPrivacy() {

    return (
        <div className="mx-auto max-w-screen-lg *:leading-relaxed my-12 ">
            <BackHeader />

            <div className="mx-auto max-w-screen-lg">
                <h1 className="text-2xl font-bold mb-4">Impressum</h1>
                <p className="*:text-xl leading-relaxed">
                    <strong>Vorname:</strong> Carla<br />
                    <strong>Nachname:</strong> Giacomini<br />
                    <strong>Adresse:</strong> Handjerystraße 55<br />
                    <strong>Postleitzahl:</strong> 12161<br />
                    <strong>Stadt:</strong> Berlin<br />
                    <strong>Ländercode:</strong> DE<br />
                    <strong>Telefonnummer:</strong> <a href="tel:+4917663341686" className="text-blue-500">+49 176 63341686</a><br />
                    <strong>E-Mail-Adresse:</strong> <a href="mailto:gradobaboberlin@gmail.com" className="text-blue-500">gradobaboberlin@gmail.com</a><br />
                    <strong>Lokale Steuernummer:</strong> DE123456789
                </p>
            </div>

        </div>
    );
}
