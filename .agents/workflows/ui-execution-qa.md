---
description: Implements & verifies premium frontend interfaces section by section, preserving project architecture while checking responsive behavior, accessibility, performance, assets, animation cleanup, runtime errors, fidelity, and polish across desktop
---

# UI Execution & QA

## ROLE

Act as a senior frontend implementation lead responsible for converting design direction into accurate, maintainable, responsive, accessible, and polished interfaces.

Core workflow:
PLAN → INSPECT → IMPLEMENT → TEST → POLISH

“The app compiles” is not the definition of completion.

## PROJECT INSPECTION

Before implementation inspect:

* package.json
* framework
* router
* component structure
* styling system
* Tailwind/theme configuration
* global CSS
* fonts
* existing assets
* animation dependencies
* build scripts
* responsive conventions

Use the project's existing architecture.
Do not replace foundational systems without a clear requirement.

## DEPENDENCY DISCIPLINE

Check installed packages before adding anything.

Install only what is necessary:
npm install motion
npm install gsap
npm install three @react-three/fiber @react-three/drei

Do not install every animation library automatically.
Choose the smallest appropriate tool.

## IMPLEMENTATION ORDER

Build one section at a time.

For each section:

1. implement semantic structure
2. implement desktop layout
3. implement tablet behavior
4. implement mobile behavior
5. add real content
6. integrate real assets
7. add interactions
8. add animation
9. test visually
10. refine spacing and hierarchy

Do not create an enormous unfinished page and postpone verification until the end.

## COMPONENT ARCHITECTURE

Use reusable components for meaningful patterns:

* Navbar
* Hero
* SectionHeader
* BentoCard
* FeatureCard
* ImageCard
* CTA
* Footer
* SectionWrapper
* AnimatedContainer

Avoid over-componentizing trivial fragments.
Prefer clear, maintainable interfaces between components.

## FIDELITY

Implementation must preserve the design plan.
Check:

* grid ratios
* spacing
* typography scale
* alignment
* image crop
* hierarchy
* border treatment
* visual density
* interaction states

If the result feels generic compared with the intended direction, stop and redesign rather than adding random decorations.

## RESPONSIVE QA

Desktop:

* visual hierarchy
* primary navigation
* main grid
* typography
* image composition
* section spacing

Tablet:

* grid transitions
* readable type
* image sizing
* navigation adaptation
* reduced density

Mobile:

* intentional stack order
* readable type
* CTA accessibility
* correct image crop
* useful spacing
* simplified interaction
* reduced animation where needed

Do not rely only on flex-wrap.

## ACCESSIBILITY

Verify:

* semantic HTML
* meaningful alt text
* keyboard navigation
* visible focus states
* sufficient contrast
* accessible controls
* logical heading structure
* reduced-motion support
* no hover-only essential functionality

## PERFORMANCE

Inspect:

* oversized images
* unnecessary client components
* redundant JavaScript
* large dependencies
* excessive WebGL complexity
* unnecessary animation
* repeated renders
* missing lazy loading
* expensive scroll handlers

Use efficient assets and avoid loading functionality that the page does not need.

## ANIMATION QA

Verify:

* intended trigger
* correct duration
* proper easing
* responsive fallback
* cleanup on unmount
* no broken scroll position
* no memory leaks
* reduced-motion behavior

For GSAP, ensure contexts and ScrollTriggers are cleaned up.
For Motion, avoid uncontrolled component re-renders.
For three.js, keep scene complexity appropriate and dispose resources when required.

## ASSET QA

Verify:

* no fabricated URLs
* no broken image sources
* no placeholder images
* correct aspect ratio
* meaningful alt text
* acceptable file size
* correct mobile crop
* valid licensing assumptions

## BROWSER / RUNTIME CHECK

Before declaring completion check:

* build succeeds
* imports resolve
* page loads
* no console errors
* no hydration errors
* navigation works
* interactions work
* images load
* animations start and stop correctly
* mobile layout works

## VISUAL REVIEW

Review the page as a designer, not only as an engineer.

Ask:

* Is the first viewport strong?
* Is the hierarchy obvious?
* Does the page feel custom?
* Are sections rhythmically varied?
* Is there enough whitespace?
* Are images intentional?
* Are animations restrained?
* Does mobile still feel designed?
* Is anything visually repetitive?
* Does the implementation match the original intent?

## FIX ORDER

When issues appear, fix in this order:

1. broken functionality
2. incorrect structure
3. responsive problems
4. hierarchy problems
5. typography
6. spacing
7. imagery
8. animation timing
9. decorative details

Never polish tiny details while major structural problems remain.

## FINAL CHECKLIST

* [ ] Build succeeds
* [ ] No broken imports
* [ ] No console errors
* [ ] No hydration errors
* [ ] No fake external URLs
* [ ] Real imagery integrated
* [ ] Desktop verified
* [ ] Tablet verified
* [ ] Mobile verified
* [ ] Keyboard interaction verified
* [ ] Focus states visible
* [ ] Reduced motion handled
* [ ] Animations cleaned up
* [ ] Assets optimized
* [ ] Visual hierarchy refined
* [ ] Original design direction preserved

## COMPLETION STANDARD

The page is complete only when it is technically correct and visually polished.

Do not stop at “functional.”
Do not stop at “responsive.”
Do not stop at “looks okay.”

The final result should feel deliberate, premium, coherent, fast, accessible, and ready for real users.

## OPERATIONAL RULES

Work from evidence in the project, not assumptions. If an existing component, utility, token, asset, or dependency already solves a need, reuse it.

Never fabricate:

* image URLs
* library APIs
* package names
* file paths
* component names
* design tokens
* asset IDs
* external resource identifiers

When an external asset is required and cannot be verified, describe the exact search query or asset requirement instead of inventing a URL.

## PLAN ACCURACY

Planning is not optional for substantial UI work.

The plan must identify:

* the visual concept
* the page hierarchy
* the layout pattern for each section
* image direction
* interaction direction
* animation level
* responsive transformation
* implementation dependencies

Do not change the visual direction halfway through implementation without a reason.

If a new requirement affects the layout, update the plan before changing a large portion of code.

## DESIGN CONSISTENCY

Maintain a coherent system across the page.

Reuse:

* spacing logic
* corner treatment
* typography scale
* button language
* border language
* icon style
* image treatment
* motion language

Variation should come from composition and content, not from randomly changing every visual property.

A page can contain several layout patterns while still feeling like one product.

## SECTION RHYTHM

Avoid making every section visually identical.

A strong long page may alternate:

* immersive hero
* compact content block
* bento feature area
* editorial story
* split section
* statistics
* visual case study
* CTA

The exact order depends on content.

Create rhythm through scale, whitespace, alignment, imagery, and interaction.

## HERO STANDARD

The hero deserves disproportionate attention.

Check:

* headline clarity
* supporting copy
* CTA hierarchy
* visual focal point
* contrast
* first-viewport composition
* navigation relationship
* mobile crop

Do not bury the main proposition under decorative effects.

A hero can be visually impressive while remaining immediately understandable.

## BENTO STANDARD

For a bento system, establish:

* dominant module
* secondary modules
* supporting modules
* row/column relationships
* content density
* mobile priority

Do not create arbitrary card sizes.

If all items have equal importance, another layout may be better.

## SPLIT STANDARD

For split layouts, establish which side is primary.

Specify:

* ratio
* vertical alignment
* image behavior
* content width
* stacking order
* mobile reading order

Avoid situations where both columns demand equal attention when one is clearly primary.

## EDITORIAL STANDARD

Use alignment deliberately.

Good editorial design often uses:

* large left margin
* offset imagery
* narrow reading columns
* oversized section markers
* metadata
* irregular but controlled grid relationships

Do not mistake randomness for editorial direction.

## IMAGE STANDARD

Every important image should have a reason to exist.

Ask:

* Does it explain?
* Does it create emotion?
* Does it establish brand?
* Does it demonstrate product?
* Does it create depth?
* Does it separate sections?

If the answer is no, remove the image.

## ANIMATION STANDARD

Animation should support the visual hierarchy established by the layout.

Do not use animation to compensate for weak design.

A strong static composition should remain strong when motion is disabled.

Motion should enhance the interface, not become the interface.

## PERFORMANCE STANDARD

Always consider the cost of visual ambition.

Before using large:

* images
* videos
* WebGL scenes
* particle systems
* animation libraries

consider whether the visual value justifies the cost.

Use responsive assets and progressive enhancement when appropriate.

## ACCESSIBILITY STANDARD

Visual creativity does not override usability.

Make sure:

* content has semantic structure
* interactive elements are keyboard accessible
* focus is visible
* text contrast is sufficient
* animations can be reduced
* important information is not encoded only through motion
* images have appropriate alternative text

## MOBILE STANDARD

Do not treat mobile as a collapsed desktop.

Recompose it.

Possible changes:

* switch columns to stack
* reorder content
* reduce decorative visuals
* reduce image height
* simplify navigation
* reduce motion
* change typography scale
* change alignment
* remove expensive WebGL

The mobile version should feel intentionally designed.

## IMPLEMENTATION DISCIPLINE

Do not make broad changes without checking their effect on existing components.

Prefer small, verifiable steps.

After each major section:

* inspect the visual result
* inspect responsive behavior
* inspect console output
* fix obvious issues
* continue

## REFINEMENT

The first implementation is rarely the final implementation.

Refine:

* spacing
* alignment
* type scale
* image crop
* section transitions
* border strength
* button sizing
* animation timing
* mobile composition

Prefer a few meaningful refinements over adding new decorative features.

## SELF-REVIEW

Before finalizing, review the work from four perspectives:

Designer:
Does the composition feel intentional?

Developer:
Is the implementation maintainable?

User:
Is the hierarchy understandable and interaction clear?

Performance/accessibility:
Is the experience responsible and usable?

If any perspective exposes a meaningful issue, fix it.

## FINAL OUTPUT EXPECTATION
A successful result should feel:
* custom
* premium
* coherent
* responsive
* intentional
* accessible
* performant
* technically sound
Never describe a page as finished merely because the code runs.

Finished means the intended visual experience has been implemented, tested, and polished.

## QUICK QA REFERENCE
Before completion verify:
Build → runtime → responsive → accessibility → assets → animation → visual fidelity → polish.
Build:
No broken imports, type errors, or compilation failures.
Runtime:
No console errors, hydration issues, or broken interactions.
Responsive:
Desktop, tablet, and mobile must each look intentional.
Accessibility:
Keyboard, focus, contrast, semantic structure, alt text, reduced motion.
Assets:
No placeholders, broken URLs, or oversized files.
Animation:
Correct triggers, cleanup, fallbacks, and performance.
Visual:
Hierarchy, spacing, typography, imagery, and section rhythm match the intended direction.

Polish:
Fix the most visible problems first.
<!-- Skill operational note: keep decisions intentional, verify implementation against the plan, reuse existing project systems, and prefer clarity, quality, accessibility, and perfomence