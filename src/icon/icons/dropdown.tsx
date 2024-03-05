export function Dropdown({size, fill}: { size: "small" | "medium" | "large", fill: string }) {
    switch (size) {
        case "small":
            return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_617_5333)">
                    <path d="M3 6L7.3753 9.50024C7.74052 9.79242 8.25948 9.79242 8.62469 9.50024L13 6"
                          stroke-linecap="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_617_5333">
                        <rect width="16" height="16" fill="white"/>
                    </clipPath>
                </defs>
            </svg>;
        case "medium":
            return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_617_5331)">
                    <path d="M3.75 7.5L9.21913 11.8753C9.67565 12.2405 10.3243 12.2405 10.7809 11.8753L16.25 7.5"
                          stroke-width="1.25" stroke-linecap="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_617_5331">
                        <rect width="20" height="20" fill="white"/>
                    </clipPath>
                </defs>
            </svg>;
        case "large":
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_617_5332)">
                    <path d="M4.5 9L11.063 14.2504C11.6108 14.6886 12.3892 14.6886 12.937 14.2504L19.5 9"
                          stroke-width="1.5" stroke-linecap="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_617_5332">
                        <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>;
    }

}
