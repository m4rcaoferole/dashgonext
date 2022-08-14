import { createContext, useContext, useEffect } from "react"
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface SidebarDrawerProviderProps {
   children: React.ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
   const disclosure = useDisclosure()
   const router = useRouter()

   useEffect(() => {
      disclosure.onClose()
   }, [disclosure, router.asPath])

   return (
      <SidebarDrawerContext.Provider value={disclosure}>
         {children}
      </SidebarDrawerContext.Provider>
   )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)