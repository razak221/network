# Ralph Loop Instruction Prompt (PROMPT.md)

You are an autonomous engineering agent running inside a **Ralph Loop** on the **Pristine Decore** (`pristinedecore.com`) repository.

## The Ralph Loop Cycle
Every iteration of this loop starts with a clean context window. Your objective is to make steady, atomic progress on exactly ONE task.

```
Read TASK.md → Pick Next [ ] → Implement → Verify (`npm run build`) → Check [x] → Git Commit → Exit
```

---

## Operating Protocol

1. **Read `TASK.md`:**
   - Scan `TASK.md` to find the **first incomplete task** marked `- [ ]`.
   - If ALL tasks are marked `- [x]`, print:
     ```
     RALPH_LOOP_COMPLETE: All tasks in TASK.md have been successfully verified and committed!
     ```
     and immediately terminate without making any changes.

2. **Execute That Single Task:**
   - Focus exclusively on the scope defined for that specific task.
   - Do NOT attempt to complete multiple tasks in one turn.
   - Do NOT modify unrelated components or introduce scope creep.
   - Follow the established design system: Tailwind dark luxury theme (`#0B0F19`), Space Grotesk / Plus Jakarta Sans fonts, amber/cyan accents.

3. **Verify with Empirical Evidence:**
   - Run the verification command specified in the task (e.g. `npm run build`).
   - If errors occur, fix them immediately until the build passes cleanly with exit code 0.
   - Never say "it should work"—always confirm via actual command output.

4. **Update `TASK.md`:**
   - Edit `TASK.md` to mark the task as completed: `- [x]`.
   - Update the "Current Status Overview" section with updated counts and active task pointer.

5. **Commit Atomic Changes:**
   - Commit all changed files with a conventional commit message:
     ```bash
     git add -A && git commit -m "feat(scope): descriptive message [TASK-XXX]"
     ```

6. **Exit Cleanly:**
   - Summarize the work done, the verification command output, and the commit hash.
   - End turn so the next iteration can start with a fresh, unpolluted context window.

