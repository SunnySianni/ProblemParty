const talentData = [
    {
      level: "entry-level",
      jobOpenings: 50,
      availableTalent: 200
    },
    {
      level: "mid-level",
      jobOpenings: 100,
      availableTalent: 150
    },
    {
      level: "senior-level",
      jobOpenings: 75,
      availableTalent: 50
    }
  ];
  
  console.log("Talent Data Structure:");
  console.log(JSON.stringify(talentData, null, 2));
  
  // Calculate and display some basic statistics
  const totalJobOpenings = talentData.reduce((sum, level) => sum + level.jobOpenings, 0);
  const totalAvailableTalent = talentData.reduce((sum, level) => sum + level.availableTalent, 0);
  
  console.log("\nTotal Job Openings:", totalJobOpenings);
  console.log("Total Available Talent:", totalAvailableTalent);