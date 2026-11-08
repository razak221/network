#!/usr/bin/env bash
# ==============================================================================
# Ralph Loop Runner — Autonomous Task Iterator
# Project: Pristine Decore (pristinedecore.com)
# Reference: Geoffrey Huntley Ralph Loop Pattern
# ==============================================================================

set -euo pipefail

# Text formatting
BOLD="\033[1m"
GREEN="\033[0;32m"
CYAN="\033[0;36m"
YELLOW="\033[1;33m"
RED="\033[0;31m"
RESET="\033[0m"

TASK_FILE="TASK.md"
PROMPT_FILE="PROMPT.md"
MAX_ITERATIONS=${1:-10}
ITERATION=1

echo -e "${CYAN}${BOLD}"
echo "=========================================================="
echo "           PRISTINE DECORE — RALPH LOOP RUNNER            "
echo "=========================================================="
echo -e "${RESET}"

# Pre-flight checks
if [[ ! -f "$TASK_FILE" ]]; then
  echo -e "${RED}Error: $TASK_FILE not found in current directory.${RESET}"
  exit 1
fi

if [[ ! -f "$PROMPT_FILE" ]]; then
  echo -e "${RED}Error: $PROMPT_FILE not found in current directory.${RESET}"
  exit 1
fi

# Function to count pending tasks
count_pending_tasks() {
  grep -c "^- \[ \]" "$TASK_FILE" || true
}

# Function to get next pending task title
get_next_task() {
  grep -m 1 "^- \[ \]" "$TASK_FILE" || echo "None"
}

trap 'echo -e "\n${YELLOW}Ralph Loop interrupted by user. Exiting cleanly.${RESET}"; exit 0' SIGINT SIGTERM

echo -e "${YELLOW}Starting Ralph Loop (Max Iterations: ${MAX_ITERATIONS})${RESET}"
echo ""

while [[ $ITERATION -le $MAX_ITERATIONS ]]; do
  PENDING=$(count_pending_tasks)

  if [[ "$PENDING" -eq 0 ]]; then
    echo -e "${GREEN}${BOLD}🎉 ALL TASKS COMPLETE! No more pending items in $TASK_FILE.${RESET}"
    break
  fi

  NEXT_TASK=$(get_next_task)
  echo -e "${CYAN}[Cycle ${ITERATION}/${MAX_ITERATIONS}]${RESET} Pending tasks remaining: ${BOLD}${PENDING}${RESET}"
  echo -e "${YELLOW}Next Task:${RESET} ${NEXT_TASK}"
  echo -e "----------------------------------------------------------"

  # If an agent CLI is available (e.g. claude, agy, gemini, cursor), invoke it:
  if command -v agy &> /dev/null; then
    echo -e "${GREEN}Invoking Antigravity (agy)...${RESET}"
    agy --prompt "$(cat "$PROMPT_FILE")" || true
  elif command -v claude &> /dev/null; then
    echo -e "${GREEN}Invoking Claude Code...${RESET}"
    claude -p --dangerously-skip-permissions < "$PROMPT_FILE" || true
  elif command -v gemini &> /dev/null; then
    echo -e "${GREEN}Invoking Gemini CLI...${RESET}"
    gemini -p "$PROMPT_FILE" || true
  else
    echo -e "${YELLOW}Notice:${RESET} No external agent CLI (agy/claude/gemini) detected on PATH."
    echo -e "Displaying next task prompt for manual or IDE agent execution:"
    echo ""
    echo -e "${BOLD}${NEXT_TASK}${RESET}"
    echo ""
    echo -e "To execute this task in your IDE agent, simply paste:"
    echo -e "  ${CYAN}\"Execute the next pending task in TASK.md following PROMPT.md\"${RESET}"
    break
  fi

  echo -e "${GREEN}Cycle ${ITERATION} finished.${RESET}\n"
  ITERATION=$((ITERATION + 1))
  sleep 1
done

echo -e "${CYAN}==========================================================${RESET}"
echo -e "${BOLD}Ralph Loop Session Ended.${RESET}"
echo -e "Current Pending Tasks: $(count_pending_tasks)"
