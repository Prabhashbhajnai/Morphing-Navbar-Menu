import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

// Components
import Menu0 from './Menu/Menu0'
import Menu1 from './Menu/Menu1'
import Menu2 from './Menu/Menu2'
import Menu3 from './Menu/Menu3'
import SlideWrapper from './SlideWrapper'

const NavLinks = () => {
    // state to keep track of the hovered link
    const [hovering, setHovering] = useState(null)
    // state to keep track of the left position of the popover
    const [popoverLeft, setPopoverLeft] = useState(null)
    // state to keep track of the height of the popover
    const [popoverHeight, setPopoverHeight] = useState(null)

    const refs = useRef([])

    // function to handle mouse enter event
    const handleMouseEnter = (index, event) => {
        // set the hovering state to the index of the hovered link
        setHovering(index)
        // set the popover left position to the offset left of the hovered link
        setPopoverLeft(event.target.offsetLeft)

        // get the height of the hovered menu
        const menuElement = refs.current[index]

        if (menuElement)
            setPopoverHeight(menuElement.offsetHeight)
    }

    return (
        <nav
            onMouseLeave={() => setHovering(null)}
            className='flex gap-5 justify-between text-base tracking-wide whitespace-nowrap max-md:flex-wrap max-md:max-w-full'
        >
            <a
                onMouseEnter={(event) => handleMouseEnter(0, event)}
                href='/products'
                className="my-auto text-center leading-[164%]"
            >
                Products
            </a>
            <a
                onMouseEnter={(event) => handleMouseEnter(1, event)}
                href='/solutions'
                className="my-auto text-center leading-[164%]"
            >
                Solutions
            </a>
            <a
                onMouseEnter={(event) => handleMouseEnter(2, event)}
                href='/developers'
                className="my-auto text-center leading-[164%]"
            >
                Developers
            </a>
            <a
                onMouseEnter={(event) => handleMouseEnter(3, event)}
                href='/resources'
                className="my-auto text-center leading-[164%]"
            >
                Resources
            </a>
            <a
                onMouseEnter={(event) => handleMouseEnter(4, event)}
                href='/pricing'
                className="my-auto text-center leading-[164%]"
            >
                Pricing
            </a>

            {/* T */}
            <div
                className={clsx(
                    'absolute z-40 top-12 pt-6 -ml-24 w-[600px] duration-300',
                    hovering !== null ? 'transition-all' : 'opacity-0 pointer-events-none'
                )}
                style={{ left: popoverLeft || 100 }}
            >
                <div
                    style={{
                        height: popoverHeight || 100,
                    }}
                    className='bg-whiteabsolute overflow-hidden transform-gpu rounded shadow-lg'
                >
                    <SlideWrapper index={0} hovering={hovering}>
                        <Menu0 ref={element => refs.current[0] = element} />
                    </SlideWrapper>

                    <SlideWrapper index={1} hovering={hovering}>
                        <Menu1 ref={element => refs.current[1] = element} />
                    </SlideWrapper>

                    <SlideWrapper index={2} hovering={hovering}>
                        <Menu2 ref={element => refs.current[2] = element} />
                    </SlideWrapper>

                    <SlideWrapper index={3} hovering={hovering}>
                        <Menu3 ref={element => refs.current[3] = element} />
                    </SlideWrapper>

                    {/* <SlideWrapper index={4} hovering={hovering}>
                        <Menu4 ref={element => refs.current[4] = element} />
                    </SlideWrapper> */}
                </div>
            </div>

        </nav>
    )
}

export default NavLinks