import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ContactMap = () => {
  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Ubicación</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124838.69973884155!2d-86.34086329610105!3d12.097814716672673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71560dd907880b%3A0x6c5ef4a2144f4c6a!2sManagua!5e0!3m2!1sen!2sni!4v1735768552502!5m2!1sen!2sni"
            width="100%"
            height="500"
            style={{ border: 0, borderRadius: "0.5rem" }}
            className="w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactMap;