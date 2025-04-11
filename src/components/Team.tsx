
import React from 'react';
import { User, Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  email?: string;
}

const TeamMember = ({ name, role, image, linkedin, email }: TeamMemberProps) => {
  return (
    <div className="glass-card overflow-hidden hover-card group">
      <div className="aspect-[3/4] relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <User size={64} className="text-gray-300" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="w-full p-4 flex justify-center gap-4">
            {linkedin && (
              <a 
                href={linkedin} 
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-egera transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>
            )}
            {email && (
              <a 
                href={`mailto:${email}`} 
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-egera transition-colors"
              >
                <Mail size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Markus Olsen",
      role: "CEO & Kreativ leder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500",
      linkedin: "#",
      email: "markus@egera.no"
    },
    {
      name: "Fredrik Johansen",
      role: "Teknisk leder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500",
      linkedin: "#",
      email: "fredrik@egera.no"
    }
  ];

  return (
    <section id="om-oss" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hodene bak Egera
          </h2>
          <p className="text-gray-600">
            Vi er et team av kreative og tekniske spesialister med lidenskap for digital innovasjon og kundefokuserte løsninger
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              linkedin={member.linkedin}
              email={member.email}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
