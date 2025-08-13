'use client'

import { useState } from 'react'
import Image from 'next/image'
import * as Menubar from '@radix-ui/react-menubar'
import Link from 'next/link'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'
import { centralizedExchanges, decentralizedExchanges } from '@/data/exchanges'

function GetIQModalContent({ onClose }: { onClose?: () => void }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-muted-foreground">Get the IQ token</h3>
        {onClose && (
          <button 
            type="button"
            onClick={onClose}
            className="p-1 rounded-full  hover:bg-neutral-700 transition-colors"
            aria-label="Close modal"
          >
            <IoClose className="w-5 h-5 text-foreground" />
          </button>
        )}
      </div>

      <p className="text-muted-foreground text-sm font-medium w-full">
        Get involved in the IQ Ecosystem and swap the IQ token easily across different exchange platforms.
      </p>

      <div className="border-t border-neutral-700" />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <h4 className="font-semibold mb-3 text-sm text-muted-foreground">Centralized Exchanges</h4>
          <div className="space-y-2 flex-1">
            {centralizedExchanges.map((exchange) => {
              const LogoComponent = exchange.logo
              return (
                <Menubar.Item
                  key={exchange.name}
                  className="hover:outline-none border border-neutral-700 rounded-xl"
                >
                  <Link
                    href={exchange.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-700 transition-colors w-full"
                    data-ph-capture-attribute-exchange-clicked={exchange.name.toLowerCase()}
                  >
                    <div className="flex items-center gap-2">
                      <LogoComponent width={20} height={20} />
                      <span className="text-sm font-medium text-muted-foreground">
                        {exchange.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">
                      {exchange.pair}
                    </span>
                  </Link>
                </Menubar.Item>
              )
            })}
          </div>

          <div className="text-center pt-6 mt-auto">
            <Menubar.Item className="hover:outline-none">
              <Link
                href="https://iq.iqai.com/dashboard/swap"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center text-muted-foreground hover:text-muted-foreground hover:underline transition-colors text-sm"
              >
                <span className="text-muted-foreground  text-sm hover:underline">
                  See more
                </span>
                <FaArrowUpRightFromSquare className="w-5 h-5 text-muted-foreground" /> 
              </Link>
            </Menubar.Item>
          </div>
        </div>

        <div className="md:border-l md:border-neutral-700 md:pl-6">
          <h4 className="font-semibold mb-3 text-sm text-muted-foreground">Decentralized Exchanges</h4>
          <div className="space-y-2">
            {decentralizedExchanges.map((exchange) => {
              const LogoComponent = exchange.logo
              return (
                <Menubar.Item
                  key={exchange.name}
                  className="hover:outline-none border border-neutral-700 rounded-xl"
                >
                  <Link
                    href={exchange.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 hover:bg-neutral-700 transition-colors w-full"
                    data-ph-capture-attribute-exchange-clicked={exchange.name.toLowerCase()}
                  >
                    <div className="flex items-center gap-2">
                      <LogoComponent width={20} height={20} />
                      <span className="text-sm font-medium text-muted-foreground">
                        {exchange.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">
                      {exchange.pair}
                    </span>
                  </Link>
                </Menubar.Item>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
const ExchangesMenubar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="lg:-translate-y-2 md:-translate-x-2">
      <Menubar.Root>
        <Menubar.Menu>
          <Menubar.Trigger
            asChild
            onClick={() => setIsMenuOpen(true)}
            className="cursor-pointer border-none hover:bg-none px-3 pt-1"
            data-ph-capture-attribute-host-info="iq_wiki"
          >
            <div className="flex flex-row items-center gap-2 py-1">
              <Image
                src="/images/GetIQ.svg"
                alt="IQ Logo"
                width={38}
                height={38}
              />
            </div>
          </Menubar.Trigger>

          {isMenuOpen && (
            <Menubar.Portal>
              <Menubar.Content
                align="end"
                side="bottom"
                sideOffset={20}
                alignOffset={-70}
                className="z-50 w-[calc(100vw-2rem)] max-w-[600px] lg:w-[600px] rounded-xl bg-neutral-900 shadow-lg border border-neutral-700"
              >
                <div className="px-4 lg:px-6 py-6">
                  <GetIQModalContent onClose={handleMenuClose} />
                </div>
              </Menubar.Content>
            </Menubar.Portal>
          )}
        </Menubar.Menu>
      </Menubar.Root>
    </div>
  )
}
export default ExchangesMenubar
