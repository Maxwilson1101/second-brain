```C++
ListNode* partition(ListNode* head, int x) {
    ListNode* dummy = new ListNode(0, head);
    ListNode* s_tail = dummy;
    ListNode* g_head = head;
    ListNode* prev = dummy;
    ListNode* curr = prev->next;
    // Traverse the list and partition it into two parts
    while (curr != nullptr) {
        if (curr->val < x) {
            if (curr == g_head) {
                g_head = g_head->next;
            }
            prev->next = curr->next;
            curr->next = g_head;
            s_tail->next = curr;
            s_tail = curr;
            curr = prev->next;
        }
        prev = prev->next;
        curr = curr->next;
    }

    return dummy->next;
}
```