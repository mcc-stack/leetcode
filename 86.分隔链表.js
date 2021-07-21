/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const lHead = new ListNode(-1);
  let $l = lHead;
  const rHead = new ListNode(-1);
  let $r = rHead;
  while (head) {
    if (head.val < x) {
      $l.next = new ListNode(head.val);
      $l = $l.next;
    } else {
      $r.next = new ListNode(head.val);
      $r = $r.next;
    }
    head = head.next;
  }
  $l.next = rHead.next;
  return lHead.next;
};
// @lc code=end
