import React from "react";

interface TeamMember {
  name: string;
  department: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Mr. Prodip Sharma",
    department: "ME",
    role: "Coordinator Team Member",
    image: "https://ik.imagekit.io/t2pd1accwu/WhatsApp%20Image%202025-08-09%20at%2021.01.17_3669018c.jpg?updatedAt=1754817121637"
  },
  {
    name: "Mr. Mintu Gogoi",
    department: "ME",
    role: "Coordinator Team Member",
    image: "https://ik.imagekit.io/t2pd1accwu/WhatsApp%20Image%202025-08-09%20at%2021.01.18_da37cec9.jpg?updatedAt=1754817122505"
  },
  {
    name: "Mrs. Parishmita Gogoi",
    department: "ECE",
    role: "Faculty Mentor",
    image: "https://ik.imagekit.io/t2pd1accwu/Screenshot%202025-08-09%20200047.png?updatedAt=1754817118263"
  },
  {
    name: "Dr. Koushik Das",
    department: "CSE",
    role: "Faculty Mentor",
    image: "https://ik.imagekit.io/t2pd1accwu/Screenshot%202025-08-09%20195911.png?updatedAt=1754817118213"
  },
  {
    name: "Dr. Abhijit Baruah",
    department: "CSE",
    role: "Faculty Mentor",
    image: "https://ik.imagekit.io/t2pd1accwu/Screenshot%202025-08-09%20195831.png?updatedAt=1754817118144"
  },
  {
    name: "Dr. Dipankar Das",
    department: "ME",
    role: "Faculty Mentor",
    image: "https://ik.imagekit.io/t2pd1accwu/Screenshot%202025-08-09%20200559.png?updatedAt=1754817118180"
  },
  {
    name: "Dr. Pankaj Konwar",
    department: "ME",
    role: "Faculty Mentor",
    image: "https://ik.imagekit.io/t2pd1accwu/Screenshot%202025-08-09%20200828.png?updatedAt=1754817117780"
  },
  {
    name: "Dr. Rupam Deka",
    department: "ME",
    role: "Faculty Mentor",
    image: "https://ik.imagekit.io/t2pd1accwu/Screenshot%202025-08-09%20200502.png?updatedAt=1754817117828"
  },
  {
    name: "Dr. Saroj Yadav",
    department: "ME",
    role: "Faculty Mentor",
    image: "https://ik.imagekit.io/t2pd1accwu/Screenshot%202025-08-09%20200432.png?updatedAt=1754821760630"
  },
  {
    name: "Dr. Prasun Banik",
    department: "PE",
    role: "Faculty Mentor",
    image: "https://ik.imagekit.io/t2pd1accwu/Screenshot%202025-08-09%20200152.png?updatedAt=1754817117755"
  },
  {
    name: "Dr. Pranjal Sharmah",
    department: "ME",
    role: "Faculty Mentor",
    image: "https://ik.imagekit.io/t2pd1accwu/Screenshot%202025-08-09%20200356.png?updatedAt=1754817118279"
  },
  {
    name: "Mr. G R Michael",
    department: "ECE",
    role: "Faculty Mentor",
    image: "https://ik.imagekit.io/t2pd1accwu/Screenshot%202025-08-09%20200009.png?updatedAt=1754817118290"
  }
];

const Members = () => {
  return (
    <section id="members" className="bg-gray-50 py-12">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-12">
          {/* Eyebrow */}
          <div className="text-sm font-medium text-purple-600 uppercase tracking-wider mb-2">
            Our team
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-[36px] font-bold text-gray-900 mb-2 leading-tight">
            Some of the people you'll be working with
          </h2>

          {/* Section Subtitle */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're a 100% remote team spread all across the world. Join us!
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-3 mb-8">
          <button className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-md bg-transparent hover:bg-gray-100 transition-colors">
            About us
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-purple-600 border-none rounded-md hover:bg-purple-700 transition-colors">
            Open positions
          </button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group cursor-pointer transition-transform duration-200 ease-in-out hover:-translate-y-1"
            >
              {/* Profile Card */}
              <div className="bg-transparent border-none shadow-none">
                {/* Image Container */}
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={`Professional headshot of ${member.name}, ${member.role}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-200"
                  />
                </div>

                {/* Text Container */}
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-base font-medium text-purple-600 leading-tight">
                    {member.department} • {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
