import React from "react";

const Tab = () => {
  return (
    <div>
      <section className='pt-8 px-4 w-full'>
        <div>
          <h1 className='font-medium text-2xl text-[#101828]'>Settings</h1>
          <p className='font-normal text-base text-[#667085] mt-2'>
            Manage your team preferences here.
          </p>
        </div>
      </section>

      <div className='flex items-center'>
        {[
          { name: "my_details", text: "My details" },
          { name: "profile", text: "Profile" },
          { name: "password", text: "Password" },
          { name: "team", text: "Team" },
          { name: "plan", text: "Plan" },
          { name: "billing", text: "Billing" },
          { name: "notifications", text: "Notifications" },
          { name: "integrations", text: "Integrations" },
          { name: "api", text: "API" },
        ].map((tab, index) => {
          console.log("indexxx", index);
          return (
            <div className='mt-4'>
              <ul className='w-full overflow-x-auto'>
                <li
                  className='bg-white flex last:rounded-r-md first:rounded-l-md justify-center items-center text-sm font-medium text-[#344054] whitespace-nowrap  border-solid border-l-[1px] border-y-[1px] last:border-r-[1px] border-[#d0d5dd]'
                  key={tab.name}
                >
                  <button className='px-4 py-2 focus:outline-none focus:bg-[#f9fafb]'>
                    {tab.text}
                  </button>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tab;
