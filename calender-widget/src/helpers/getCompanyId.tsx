

export default function getCompanyIdFromPath() {
      const scriptTag = document.getElementById('calender-Widget-Script');
      
      if (scriptTag) {
        const company = scriptTag.getAttribute('data-company');
        if(!company)
        {
          return 0
        }
        let companyId = parseInt(company);
        if(isNaN(companyId))
        {
            console.log("Fails to Read your companyId from Path");
            return 0;
        }
        return companyId;
      } else {
        console.error('Widget script tag not found!');
        return 0;
      }
    
}