import:py from app {fetch_lessons_index}

include "app.jac";

with entry {
    print("Syncing lessons...");
    root spawn sync_lessons;
    print("Lessons synced.");
}
