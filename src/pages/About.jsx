// src/pages/About.jsx
import Logo from "../assets/logo.png";
import SocialBar from "../components/SocialBar";

export function About() {
  return (
    <section
      className="
        pt-20
        bg-[oklch(92.3%_0.003_48.717)]
        min-h-screen
      "
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-3 grid-rows-[200px_auto_auto] divide-x divide-y border divide-gray-300">
          
          {/** Row 1: logo on left, empty on right */}
          <div className="flex items-center justify-center">
            <img src={Logo} alt="Logo" className="h-12 w-12" />
          </div>
          <div className="col-span-2" />

          {/** Row 2: Education (col-1) & Skillset (col-2&3) */}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <p className="font-semibold">University of Ottawa</p>
            <p className="text-sm">Bachelor of Computer Science (2026)</p>
          </div>
          <div className="col-span-2 p-6">
            <h3 className="text-xl font-semibold mb-4">Skillset</h3>
            <ul className="space-y-1 list-disc list-inside text-sm">
              <li>Full-Stack Development: Django, Angular, React, Node.js</li>
              <li>Microsoft Power Platform: Power BI, Power Automate</li>
              <li>Cloud Computing: Amazon AWS, Microsoft Azure</li>
              <li>Artificial Intelligence: PyTorch, TensorFlow</li>
              <li>Database Management: SQL Server, PostgreSQL, MongoDB Atlas, Firebase</li>
              <li>Programming Languages: Python, Java, GoLang, Swift, TypeScript, C++, C</li>
            </ul>
          </div>

          {/** Row 3: Experience spans all columns */}
          <div className="col-span-3 p-6">
            <h3 className="text-xl font-semibold mb-4">Workflow</h3>
            <div className="max-w-prose space-y-4 text-sm leading-relaxed">
              <p>
                As an aspiring SWE/Data engineer I have a strong skill set in financial analytics and a strong background in software
                development. In particular, I focus on close collaboration with businesses to drive revenue growth, specializing in leveraging
                cutting-edge technologies and data driven insights to drive businesses to success.
              </p>
              <p>
                From enhancing policy decision-making through analyzing key
                datasets, to developing machine learning models that give
                accurate project cost estimations, I demonstrate a strong
                understanding of the world of machine learning. Yet through my
                time at the 401 Group of Companies, I also learnt to
                communicate efficiently and effectively, versing myself in
                professional communication in order to deliver the message in a
                precise manner.
              </p>
              <p>
                Beyond my academic and professional experiences, my passion for
                coding brings me to exploring new technologies and honing my
                technical skills. Whether it’s developing full-stack
                applications, designing insightful dashboards with Microsoft
                Power BI, or experimenting with automation tools, I thrive on
                learning and applying new concepts to real-world challenges.
              </p>
            </div>

            {/** Social bar at bottom of About */}
            <div className="mt-8 flex space-x-6 text-2xl">
              <SocialBar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
