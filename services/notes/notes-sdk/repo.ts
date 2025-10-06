import { Repo } from "@automerge/automerge-repo";
import { IndexedDBStorageAdapter } from "@automerge/automerge-repo-storage-indexeddb";

const repo = new Repo({
  storage: new IndexedDBStorageAdapter(),
});
declare global {
  interface Window {
    repo: Repo;
  }
}
window.repo = repo;
