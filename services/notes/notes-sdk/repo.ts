import { BroadcastChannelNetworkAdapter } from "@automerge/automerge-repo-network-broadcastchannel";
import { Repo } from "@automerge/automerge-repo";
import { IndexedDBStorageAdapter } from "@automerge/automerge-repo-storage-indexeddb";

const repo = new Repo({
  storage: new IndexedDBStorageAdapter(),
  network: [new BroadcastChannelNetworkAdapter()],
});
declare global {
  interface Window {
    repo: Repo;
  }
}
window.repo = repo;
