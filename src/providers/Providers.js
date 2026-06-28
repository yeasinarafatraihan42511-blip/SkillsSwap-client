// "use client";

// import { HeroUIProvider } from "@heroui/react";

// export default function Providers({ children }) {
//   return (
//     <HeroUIProvider>
//       {children}
//     </HeroUIProvider>
//   );
// }
"use client";

import { HeroUIProvider } from "@heroui/react";

export default function Providers({ children }) {
  return (

     <div>
         {children}
     </div>
   
  );
}