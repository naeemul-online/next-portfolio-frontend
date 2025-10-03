import { getUserSession } from "@/helpers/getUserSession";

const AboutPage = async () => {
  const session = await getUserSession();
  console.log(session);
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-semibold text-gray-700 text-center">
        💤 The developer is sleeping now. Check back later!
      </h1>
    </div>
  );
};

export default AboutPage;
