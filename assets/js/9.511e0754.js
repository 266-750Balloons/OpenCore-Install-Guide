(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{582:function(e,t,o){e.exports=o.p+"assets/img/10.4-Tiger.c56a3acb.png"},583:function(e,t,o){e.exports=o.p+"assets/img/10.5-Leopard.7a062252.png"},584:function(e,t,o){e.exports=o.p+"assets/img/10.6-Snow-Loepard.e53c39f8.png"},585:function(e,t,o){e.exports=o.p+"assets/img/10.7-Lion.754d82b3.png"},586:function(e,t,o){e.exports=o.p+"assets/img/10.8-MountainLion.26ccbf90.png"},587:function(e,t,o){e.exports=o.p+"assets/img/10.9-Mavericks.173902a3.png"},588:function(e,t,o){e.exports=o.p+"assets/img/10.10-Yosemite.db1b35f6.png"},589:function(e,t,o){e.exports=o.p+"assets/img/10.12-Sierra.34764fef.png"},590:function(e,t,o){e.exports=o.p+"assets/img/10.13-HighSierra.a16af7dd.png"},591:function(e,t,o){e.exports=o.p+"assets/img/10.15-Catalina.3da44cb0.png"},592:function(e,t,o){e.exports=o.p+"assets/img/11-Big-Sur.67f79f3c.png"},672:function(e,t,o){"use strict";o.r(t);var r=o(25),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"why-opencore-over-clover-and-others"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#why-opencore-over-clover-and-others"}},[e._v("#")]),e._v(" Why OpenCore over Clover and others")]),e._v(" "),r("ul",[r("li",[e._v("Supported version: 0.6.7")])]),e._v(" "),r("p",[e._v("This section contains a brief rundown as to why the community has been transitioning over to OpenCore, and aims to dispel a few common myths in the community. Those who just want a macOS machine can skip this page.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#why-opencore-over-clover-and-others"}},[e._v("Why OpenCore over Clover and others")]),e._v(" "),r("ul",[r("li",[e._v("OpenCore features")]),e._v(" "),r("li",[e._v("Software support")]),e._v(" "),r("li",[e._v("Kext injection")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#opencore-s-shortcomings"}},[e._v("OpenCore's shortcomings")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#common-myths"}},[e._v("Common Myths")]),e._v(" "),r("ul",[r("li",[e._v("Is OpenCore unstable as it's a beta?")]),e._v(" "),r("li",[e._v("Does OpenCore always inject SMBIOS and ACPI data into other OSes?")]),e._v(" "),r("li",[e._v("Does OpenCore require a fresh install?")]),e._v(" "),r("li",[e._v("Does OpenCore only support limited versions of macOS?")])])])]),e._v(" "),r("h2",{attrs:{id:"opencore-features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#opencore-features"}},[e._v("#")]),e._v(" OpenCore features")]),e._v(" "),r("ul",[r("li",[e._v("More OS Support!\n"),r("ul",[r("li",[e._v("OpenCore now supports more versions of OS X and macOS natively without painful hacks Clover and Chameleon had to implement")]),e._v(" "),r("li",[e._v("This includes OSes as far back as 10.4, Tiger, and even the latest builds of 11, Big Sur!")])])]),e._v(" "),r("li",[e._v("On average, OpenCore systems boot faster than those using Clover as less unnecessary patching is done")]),e._v(" "),r("li",[e._v("Better overall stability as patches can be much more precise:\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://www.reddit.com/r/hackintosh/comments/fo9bfv/macos_10154_update/",target:"_blank",rel:"noopener noreferrer"}},[e._v("macOS 10.15.4 update"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("AMD OSX patches not needing to update with every minor security update")])])]),e._v(" "),r("li",[e._v("Better overall security in many forms:\n"),r("ul",[r("li",[e._v("No need to disable System Integrity Protection (SIP)")]),e._v(" "),r("li",[e._v("Built-in FileVault 2 support")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/security.html#Vault",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vaulting"),r("OutboundLink")],1),e._v(" allowing to create EFI snapshots preventing unwanted modifications")]),e._v(" "),r("li",[e._v("True secure-boot support\n"),r("ul",[r("li",[e._v("Both UEFI and Apple's variant")])])])])]),e._v(" "),r("li",[e._v("BootCamp switching and boot device selection are supported by reading NVRAM variables set by Startup Disk, just like a real Mac.")]),e._v(" "),r("li",[e._v("Supports boot hotkey via "),r("code",[e._v("boot.efi")]),e._v(" - hold "),r("code",[e._v("Option")]),e._v(" or "),r("code",[e._v("ESC")]),e._v(" at startup to choose a boot device, "),r("code",[e._v("Cmd+R")]),e._v(" to enter Recovery or "),r("code",[e._v("Cmd+Opt+P+R")]),e._v(" to reset NVRAM.")])]),e._v(" "),r("h2",{attrs:{id:"software-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#software-support"}},[e._v("#")]),e._v(" Software Support")]),e._v(" "),r("p",[e._v("The biggest reason someone may want to switch from other boot loaders is actually software support:")]),e._v(" "),r("ul",[r("li",[e._v("Kexts no longer testing for Clover:\n"),r("ul",[r("li",[e._v("Got a bug with a kext? Many developers including the organization "),r("a",{attrs:{href:"https://github.com/acidanthera",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acidanthera"),r("OutboundLink")],1),e._v(" (maker of most of your favorite kexts) won't provide support unless on OpenCore")])])]),e._v(" "),r("li",[e._v("Many firmware drivers being merged into OpenCore:\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/acidanthera/AppleSupportPkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("APFS Support"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/acidanthera/AppleSupportPkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("FileVault support"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/acidanthera/AptioFixPkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Firmware patches"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/AMD-OSX/AMD_Vanilla/tree/opencore",target:"_blank",rel:"noopener noreferrer"}},[e._v("AMD OSX patches"),r("OutboundLink")],1),e._v(":\n"),r("ul",[r("li",[e._v("Have AMD-based hardware? The kernel patches required to boot macOS no longer support Clover – they now only support OpenCore.")])])])]),e._v(" "),r("h2",{attrs:{id:"kext-injection"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kext-injection"}},[e._v("#")]),e._v(" Kext Injection")]),e._v(" "),r("p",[e._v("To better understand OpenCore's kext injection system, we should first look at how Clover works:")]),e._v(" "),r("ol",[r("li",[e._v("Patches SIP open")]),e._v(" "),r("li",[e._v("Patches to enable XNU's zombie code for kext injection")]),e._v(" "),r("li",[e._v("Patches race condition with kext injection")]),e._v(" "),r("li",[e._v("Injects kexts")]),e._v(" "),r("li",[e._v("Patches SIP back in")])]),e._v(" "),r("p",[e._v("Things to note with Clover's method:")]),e._v(" "),r("ul",[r("li",[e._v("Calling XNU's zombie code that hasn't been used since 10.7, it's seriously impressive Apple hasn't removed this code yet\n"),r("ul",[r("li",[e._v("OS updates commonly break this patch, like recently with 10.14.4 and 10.15")])])]),e._v(" "),r("li",[e._v("Disables SIP and attempts to re-enable it, don't think much needs to be said")]),e._v(" "),r("li",[e._v("Likely to break with macOS 11.0 (Big Sur)")]),e._v(" "),r("li",[e._v("Supports OS X all the way back to 10.5")])]),e._v(" "),r("p",[e._v("Now let's take a look at OpenCore's method:")]),e._v(" "),r("ol",[r("li",[e._v("Takes existing prelinked kernel and kexts ready to inject")]),e._v(" "),r("li",[e._v("Rebuilds the cache in the EFI environment with the new kexts")]),e._v(" "),r("li",[e._v("Adds this new cache in")])]),e._v(" "),r("p",[e._v("Things to note with OpenCore's method:")]),e._v(" "),r("ul",[r("li",[e._v("OS agnostic as the prelinked kernel format has stayed the same since 10.6 (v2), far harder to break support.\n"),r("ul",[r("li",[e._v("OpenCore also supports prelinked kernel (v1, found in 10.4 and 10.5), cacheless, Mkext and KernelCollections, meaning it also has proper support for all Intel versions of OS X/macOS")])])]),e._v(" "),r("li",[e._v("Far better stability as there is far less patching involved")])]),e._v(" "),r("h1",{attrs:{id:"opencore-s-shortcomings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#opencore-s-shortcomings"}},[e._v("#")]),e._v(" OpenCore's shortcomings")]),e._v(" "),r("p",[e._v("The majority of Clover's functionality is actually supported in OpenCore in the form of some quirk, however when transitioning you should pay close attention to OpenCore's missing features as this may or may not affect yourself:")]),e._v(" "),r("ul",[r("li",[e._v("Does not support booting MBR-based operating systems\n"),r("ul",[r("li",[e._v("Work around is to chain-load rEFInd once in OpenCore")])])]),e._v(" "),r("li",[e._v("Does not support UEFI-based VBIOS patching\n"),r("ul",[r("li",[e._v("This can be done in macOS however")])])]),e._v(" "),r("li",[e._v("Does not support automatic DeviceProperty injection for legacy GPUs\n"),r("ul",[r("li",[e._v("ie. InjectIntel, InjectNvidia and InjectAti")]),e._v(" "),r("li",[e._v("This can be done manually however: "),r("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/gpu-patching/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GPU patching"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("Does not support IRQ conflict patching\n"),r("ul",[r("li",[e._v("Can be resolved with "),r("a",{attrs:{href:"https://github.com/corpnewt/SSDTTime",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDTTime"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("Does not support P and C state generation for older CPUs")]),e._v(" "),r("li",[e._v("Does not support Target Bridge ACPI patching")]),e._v(" "),r("li",[e._v("Does not support Hardware UUID Injection")]),e._v(" "),r("li",[e._v("Does not support auto-detection for many Linux bootloader\n"),r("ul",[r("li",[e._v("Can be resolved by adding an entry in "),r("code",[e._v("BlessOverride")])])])]),e._v(" "),r("li",[e._v("Does not support many of Clover's XCPM patches\n"),r("ul",[r("li",[e._v("ie. Ivy Bridge XCPM patches")])])]),e._v(" "),r("li",[e._v("Does not support hiding specific drives")]),e._v(" "),r("li",[e._v("Does not support changing settings within OpenCore's menu")]),e._v(" "),r("li",[e._v("Does not patch PCIRoot UID value")]),e._v(" "),r("li",[e._v("Does not support macOS-only ACPI injection and patching")])]),e._v(" "),r("h1",{attrs:{id:"common-myths"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#common-myths"}},[e._v("#")]),e._v(" Common Myths")]),e._v(" "),r("h2",{attrs:{id:"is-opencore-unstable-as-it-s-a-beta"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#is-opencore-unstable-as-it-s-a-beta"}},[e._v("#")]),e._v(" Is OpenCore unstable as it's a beta")]),e._v(" "),r("p",[e._v("Short Answer: No")]),e._v(" "),r("p",[e._v("Long Answer: No")]),e._v(" "),r("p",[e._v("OpenCore's version number does not represent the quality of the project. Instead, it's more of a way to see the stepping stones of the project. Acidanthera still has much they'd like to do with the project including overall refinement and more feature support.")]),e._v(" "),r("p",[e._v("For example, OpenCore goes through proper security audits to ensure it complies with UEFI Secure Boot, and is the only Hackintosh bootloader to undergo these rigorous reviews and have such support.")]),e._v(" "),r("p",[e._v("Version 0.6.1 was originally designed to be the official release of OpenCore as it would have proper UEFI/Apple Secure Boot, and would be the 1 year anniversary of OpenCore's release as a public tool. However, due to circumstances around macOS Big Sur and the rewriting of OpenCore's prelinker to support it, it was decided to push off 1.0.0 for another year.")]),e._v(" "),r("p",[e._v("Current road map:")]),e._v(" "),r("ul",[r("li",[e._v("2019: Year of Beta")]),e._v(" "),r("li",[e._v("2020: Year of Secure Boot")]),e._v(" "),r("li",[e._v("2021: Year of Refinement")])]),e._v(" "),r("p",[e._v("So please do not see the version number as a hindrance, instead as something to look forward to.")]),e._v(" "),r("h2",{attrs:{id:"does-opencore-always-inject-smbios-and-acpi-data-into-other-oses"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#does-opencore-always-inject-smbios-and-acpi-data-into-other-oses"}},[e._v("#")]),e._v(" Does OpenCore always inject SMBIOS and ACPI data into other OSes")]),e._v(" "),r("p",[e._v("By default, OpenCore will assume that all OSes should be treated equally in regards to ACPI and SMBIOS information. The reason for this thinking consists of three parts:")]),e._v(" "),r("ul",[r("li",[e._v("This allows for proper multiboot support, like with "),r("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/multiboot/bootcamp.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("BootCamp"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Avoids poorly made DSDTs and encourages proper ACPI practices")]),e._v(" "),r("li",[e._v("Avoids edge cases where info is injected several times, commonly seen with Clover\n"),r("ul",[r("li",[e._v("i.e. How would you handle SMBIOS and ACPI data injection once you booted boot.efi, but then get kicked out? The changes are already in memory and so trying to undo them can be quite dangerous. This is why Clover's method is frowned upon.")])])])]),e._v(" "),r("p",[e._v("However, there are quirks in OpenCore that allow for SMBIOS injection to be macOS-limited by patching where macOS reads SMBIOS info from. The "),r("code",[e._v("CustomSMIOSGuid")]),e._v(" quirk with "),r("code",[e._v("CustomSMBIOSMode")]),e._v(" set to "),r("code",[e._v("Custom")]),e._v(" can break in the future and so we only recommend this option in the event of certain software breaking in other OSes. For best stability, please disable these quirks.")]),e._v(" "),r("h2",{attrs:{id:"does-opencore-require-a-fresh-install"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#does-opencore-require-a-fresh-install"}},[e._v("#")]),e._v(" Does OpenCore require a fresh install")]),e._v(" "),r("p",[e._v('Not at all in the event you have a "Vanilla" installation – what this refers to is whether the OS has tampered in any way, such as installing 3rd party kexts into the system volume or other unsupported modifications by Apple. When your system has been heavily tampered with, either by you or 3rd party utilities like Hackintool, we recommend a fresh install to avoid any potential issues.')]),e._v(" "),r("p",[e._v("Special note for Clover users: please reset your NVRAM when installing with OpenCore. Many of Clover variables can conflict with OpenCore and macOS.")]),e._v(" "),r("ul",[r("li",[e._v("Note: Thinkpad laptops are known to be semi-bricked after an NVRAM reset in OpenCore, we recommend resetting NVRAM by updating the BIOS on these machines.")])]),e._v(" "),r("h2",{attrs:{id:"does-opencore-only-support-limited-versions-of-macos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#does-opencore-only-support-limited-versions-of-macos"}},[e._v("#")]),e._v(" Does OpenCore only support limited versions of macOS")]),e._v(" "),r("p",[e._v("As of OpenCore 0.6.2, you can now boot every Intel version of macOS going all the way back to OS X 10.4! Proper support however will depend on your hardware, so please verify yourself: "),r("RouterLink",{attrs:{to:"/macos-limits.html"}},[e._v("Hardware Limitations")])],1),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("macOS Install Gallery")]),e._v(" "),r("p",[e._v("Acidanthera has tested many versions, and I myself have run many versions of OS X on my old HP DC 7900 (Core2 Quad Q8300). Here's just a small gallery of what I've tested:")]),e._v(" "),r("p",[r("img",{attrs:{src:o(582),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(583),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(584),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(585),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(586),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(587),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(588),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(589),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(590),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(591),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(592),alt:""}})])]),e._v(" "),r("h2",{attrs:{id:"does-opencore-support-older-hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#does-opencore-support-older-hardware"}},[e._v("#")]),e._v(" Does OpenCore support older hardware")]),e._v(" "),r("p",[e._v("As of right now, the majority of Intel hardware is supported so long as the OS itself does! However please refer to the "),r("RouterLink",{attrs:{to:"/macos-limits.html"}},[e._v("Hardware Limitations page")]),e._v(" for more info on what hardware is supported in what versions of OS X/macOS.")],1),e._v(" "),r("p",[e._v("Currently, Intel's Yonah and newer series CPUs have been tested properly with OpenCore.")]),e._v(" "),r("h2",{attrs:{id:"does-opencore-support-windows-linux-booting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#does-opencore-support-windows-linux-booting"}},[e._v("#")]),e._v(" Does OpenCore support Windows/Linux booting")]),e._v(" "),r("p",[e._v("OpenCore works in the same fashion as any other boot loader, so it respects other OSes the same way. For any OSes where their bootloader has an irregular path or name, you can simply add it to the BlessOverride section.")]),e._v(" "),r("h2",{attrs:{id:"legality-of-hackintoshing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#legality-of-hackintoshing"}},[e._v("#")]),e._v(" Legality of Hackintoshing")]),e._v(" "),r("p",[e._v("Where hackintoshing sits is in a legal grey area, mainly that while this is not illegal we are in fact breaking the EULA. The reason this is not illegal:")]),e._v(" "),r("ul",[r("li",[e._v("We are downloading macOS from "),r("a",{attrs:{href:"https://github.com/corpnewt/gibMacOS/blob/master/gibMacOS.command#L84",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple's servers directly"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("We are doing this as a non-profit origination for teaching and personal use\n"),r("ul",[r("li",[e._v("People who plan to use their Hackintosh for work or want to resell them should refer to the "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Psystar_Corporation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Psystar case"),r("OutboundLink")],1),e._v(" and their regional laws")])])])]),e._v(" "),r("p",[e._v("While the EULA states that macOS should only be installed on real Macs("),r("a",{attrs:{href:"https://www.apple.com/legal/sla/docs/macOSCatalina.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("section 2B-i"),r("OutboundLink")],1),e._v(") or virtual machines running on genuine Macs("),r("a",{attrs:{href:"https://www.apple.com/legal/sla/docs/macOSCatalina.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("section 2B-iii"),r("OutboundLink")],1),e._v("), there is no enforceable law that outright bans this. However, sites that repackage and modify macOS installers do potentially risk the issue of "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act",target:"_blank",rel:"noopener noreferrer"}},[e._v("DMCA takedowns"),r("OutboundLink")],1),e._v(" and such.")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Note")]),e._v(": We are not official legal advisors, so please make the proper assessments yourself and discuss with your lawyers if you have any concerns.")])]),e._v(" "),r("h2",{attrs:{id:"does-macos-support-nvidia-gpus"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#does-macos-support-nvidia-gpus"}},[e._v("#")]),e._v(" Does macOS support Nvidia GPUs")]),e._v(" "),r("p",[e._v("Due to issues revolving around Nvidia support in newer versions of macOS, many users have somehow come to the conclusion that macOS never supported Nvidia GPUs and don't at this point. However, Apple actually still maintains and supports Macs with Nvidia GPUs in their latest OS, like the 2013 MacBook Pro models with Kepler GPUs.")]),e._v(" "),r("p",[e._v("The main issue has to do with any newer Nvidia GPUs, as Apple stopped shipping machines with them and thus they never had official OS support from Apple. Instead, users had to rely on Nvidia for 3rd party drivers. Due to issues with Apple's newly introduced Secure Boot, they could no longer support the Web Drivers and thus Nvidia couldn't publish them for newer platforms limiting them to mac OS 10.13, High Sierra.")]),e._v(" "),r("p",[e._v("For more info on OS support, see here: "),r("a",{attrs:{href:"https://dortania.github.io/GPU-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GPU Buyers Guide"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);