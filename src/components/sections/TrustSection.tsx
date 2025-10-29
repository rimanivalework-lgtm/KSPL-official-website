import { Globe, Building2, Users, Award } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-center items-center max-w-6xl mx-auto">
          <div className="card-blue-tint rounded-2xl p-6 lg:p-8 flex items-center space-x-4 lg:space-x-6 w-full max-w-[320px] sm:max-w-none lg:min-h-[120px]">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Globe className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
            </div>
            <div className="text-left flex-1">
              <div className="text-2xl lg:text-3xl font-bold text-foreground">25+</div>
              <div className="text-sm lg:text-base text-muted-foreground whitespace-nowrap">Global Presence</div>
            </div>
          </div>
          
          <div className="card-red-tint rounded-2xl p-6 lg:p-8 flex items-center space-x-4 lg:space-x-6 w-full max-w-[320px] sm:max-w-none lg:min-h-[120px]">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Building2 className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
            </div>
            <div className="text-left flex-1">
              <div className="text-2xl lg:text-3xl font-bold text-foreground">200+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Projects</div>
            </div>
          </div>
          
          <div className="card-green-tint rounded-2xl p-6 lg:p-8 flex items-center space-x-4 lg:space-x-6 w-full max-w-[320px] sm:max-w-none lg:min-h-[120px]">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
            </div>
            <div className="text-left flex-1">
              <div className="text-2xl lg:text-3xl font-bold text-foreground">100+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Clients</div>
            </div>
          </div>
          
          <div className="card-yellow-tint rounded-2xl p-6 lg:p-8 flex items-center space-x-4 lg:space-x-6 w-full max-w-[320px] sm:max-w-none lg:min-h-[120px]">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
            </div>
            <div className="text-left flex-1">
              <div className="text-2xl lg:text-3xl font-bold text-foreground">11+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
