# Design Intent

> "It should be a sparring partner with you. It shouldn't take your thoughts verbatim. It should push back."
> — Joel Lewenstein, Head of Product Design, Anthropic

The visual tokens in this skill — the cream, the terra cotta, the serif body — are the easiest part. They're also the part that makes results feel *similar* to Anthropic without making them *feel* like Anthropic. The harder, more durable difference is intent: what the product believes about the people using it, and what it refuses to do to them.

This document lays out that intent and how to put it into a frontend without writing a single line of copy that sounds like a marketing brief.

## The premise

Most software, including most AI products, is designed to *maximize engagement*. It removes friction, anticipates needs, congratulates progress, fills empty space, and ends every interaction with a path to one more interaction. This works in the short term. It also produces tools that feel exhausting to use and that subtly degrade the people using them.

Anthropic's product design pushes the other way:

- **Friction can be a feature.** A pause before action, a question that resists a yes/no answer, a confirmation step that asks the user to read what they're about to confirm — these are not failures of UX. They are the product taking the user's attention seriously.
- **The user is doing work.** Not consuming. Not browsing. The interface should treat the screen as a workspace and the time spent on it as something to protect.
- **Honesty beats engagement.** A model that pushes back on a flawed premise produces better outcomes than one that flatters it. The same is true of every confirmation, every empty state, every tooltip. Cheerful copy that hides a tradeoff is a kind of lie.
- **The user is a collaborator, not a target.** The product is a sparring partner, not an executor. The interaction is *I think this. What do you think?* — not *Would you like another?*

If the visual style is the *register*, the intent is the *posture*. Both have to be there for the result to land.

## How intent shows up in the UI

Specific patterns where intent becomes visible. Each one is something to *do*, not just believe.

### Naming

How a thing is named is a design decision. The Claude model family is named after poetic forms — Haiku (short, dense), Sonnet (medium, structured), Opus (long, ambitious). The names communicate scope and intent without leaning on engineering version numbers.

**Apply:**

- Name tiers, plans, and modes after what they *are for*, not what number they are. `Sketch` / `Draft` / `Manuscript` is more honest than `Free` / `Pro` / `Max`.
- Avoid "Pro," "Plus," "Premium," "Ultra." They communicate price tier, not capability.
- A bad name produces hours of explanatory copy. A good name lets the rest of the page stay quiet.
- If you cannot explain your name in one sentence to a stranger, replace it.

### Copy with character

> "I don't just say what I think people want to hear. I think it's important to always strive to tell the truth." — from Claude's character training

Anthropic copy doesn't shout, doesn't hedge, doesn't promise the world, doesn't apologize twice. It states what's true, then stops.

**Apply:**

- **Headlines are sentences.** `Claude is a space to think.` is a headline. `Effortless. Powerful. Built for you.` is Mad Libs.
- **State what the product does, plainly.** Avoid "leverages," "empowers," "supercharges." If a competitor's site could swap in their name and still parse, the line doesn't say anything.
- **Don't congratulate.** Replace `🎉 Awesome! You're all set!` with `Saved.` Period. The user knows what they did.
- **Don't apologize twice.** `Oh no! Something went wrong! 😢 Don't worry, we're on it!` is three lies in a row. `That request didn't go through. Try again, or [contact support].` is one true sentence.
- **Microcopy carries weight.** A button labeled `Request access` keeps a different posture than `Get started free →`. They are not interchangeable.
- **Em dashes and italic emphasis are real punctuation.** Use them. Avoid bold-mid-paragraph emphasis as a substitute for clear thinking.

### Friction, used on purpose

Anthropic's *Plan Mode* in Claude Code is a deliberate pause: the model stops, says what it intends to do, and waits before acting. This costs clicks. It's the right tradeoff because the work is consequential.

**Apply:**

- Before an action that's hard to reverse (publish, delete, deploy, send), insert a step that *summarizes the action in plain language* and asks the user to confirm. Not a `Are you sure?` modal — those are noise. A surface that says "*You're about to publish 47 changes to production. Last edited 2 minutes ago. Continue?*"
- For actions that affect other people (sharing, billing, granting access), make the consequences visible *before* the action button, not in a toast after.
- Empty states should ask a real question, not push a tutorial. `What are you working on?` is better than `Get started in three easy steps! ✨`
- A loading state that takes more than a beat should *say what it's doing*, not show a generic spinner. `Reading your draft…` is more useful than `Loading…`.

### Conversation and canvas, kept apart

Artifacts in Claude give a substantial generated thing — a document, a chart, a piece of code — *its own panel*, separate from the chat. This isn't a layout choice; it's a respect choice. A 200-line Python function shouldn't live as a chat bubble.

**Apply:**

- When the product produces output that the user will work with — a document, a result set, an image, a code block longer than ~10 lines — give it real estate distinct from the surrounding flow. A side panel, a focused view, a pinned region. Don't let it scroll away.
- Conversational chrome (turns, avatars, timestamps) should not surround content the user wants to focus on. A user reading a draft shouldn't have to look past the assistant's avatar to see it.
- The user's text and the system's output are different *kinds* of thing. Treat them differently in type, density, and persistence.

### Trust through transparency, not reassurance

> "I want them to know they're not interacting with an objective and infallible source of truth."

The product should make its limits and the user's situation legible — not by adding disclaimer banners, but by showing what's happening.

**Apply:**

- Show the system's *state* in a place the user can find without looking. Which model is answering. Which file is being read. Which permissions are in use. Which step the long-running action is on.
- Replace generic disclaimers (`AI can make mistakes. Check responses.`) with situational honesty. A page that pulls a number from a database can show *when* it was pulled. A page that shows an estimate can mark it as one.
- When the product can't do something, say what it *can* do instead. Don't bury it in a help article.
- Failure states get the same care as success states. A 404 written like a sentence is better than a cartoon.

### The work is the page

> "We are interested in our consumer users to the degree they are doing work, solving problems in their life." — Joel Lewenstein

The Anthropic product surface treats the screen as a workspace, not a feed. There is no infinite scroll. There is no engagement layer. Notifications are quiet. Nothing pulses.

**Apply:**

- No red badges with numbers in the nav. If something needs attention, name it once, where it belongs.
- No `🔥 New!` ribbons on features. Either the feature is in the product or it isn't.
- No marketing modal interrupting work to ask the user to upgrade, rate, or share.
- Animation marks events; it does not provide ambient texture. Logos don't pulse. Cursors don't trail.
- A daily-active-user metric is not a design goal. *Did this person leave the session further along than when they arrived* is.

## Voice, applied

A short before/after for common surfaces. The right column is what to write instead.

| Surface | Marketing default | Anthropic-style |
|---|---|---|
| Hero headline | *Effortless. Powerful. Built for you.* | *A quieter way to think about software.* |
| Primary CTA | *Get Started Free →* | *Request access* |
| Empty inbox | *🎉 You're all caught up!* | *Nothing here.* |
| Save toast | *Awesome! Your changes are saved! ✨* | *Saved.* |
| Error | *Oops! Something went wrong 😢* | *That didn't go through. Try again, or write to us.* |
| Confirm delete | *Are you sure?* | *This will remove the December 14 draft. There's no undo.* |
| Newsletter | *Subscribe to our newsletter for tips!* | *We send a short letter once a month. No tracking, no upsells.* |
| Pricing tier | *Pro · Plus · Premium* | *Sketch · Draft · Manuscript* |
| Onboarding | *Let's get you set up in 3 easy steps! ✨* | *What are you working on?* |
| Disclaimer | *AI can make mistakes. Verify responses.* | (Show provenance instead — *Drafted from your March outline. [Open source]* ) |

## Posture checklist

A short list to read against any new screen before declaring it done. If three or more of these are *yes*, the page is working.

1. Could the user finish their task and leave the session further along than when they arrived?
2. Is the most important sentence on the page true, specific, and unembarrassing to read aloud?
3. Does any irreversible action surface its consequences in plain language *before* the button?
4. Does the product tell the user what it is, what it isn't, and what state it's in?
5. Are notifications, badges, and modals limited to things the user actually needs to know now?
6. If you removed every emoji, every exclamation point, and every cheerful adverb, would the copy still parse? (It should.)
7. Does the system push back where pushing back would be more honest than agreeing?
8. Is friction placed where it raises the quality of the user's decision, not where it raises engagement?
9. Could a thoughtful editor read the page and find nothing to cut?
10. Does the product treat the user as a collaborator, not a metric?

If most are no, the visual tokens won't save it. Go back to copy first.
